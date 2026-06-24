"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Monochrome topographic contour map evoking the geography of New York City.
 *
 * A full-screen fragment shader builds an FBM height field, warps it with a
 * coastline mask roughly shaped like Manhattan / the harbor, and renders it as
 * animated topographic contour lines (with darker "index" contours every few
 * steps, the way real topo maps read). Monochrome ink palette, with the brand
 * accent used very sparingly on a single index contour.
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform vec3  uBg;
  uniform vec3  uLine;
  uniform vec3  uIndex;
  uniform vec3  uAccent;
  uniform float uReduced;

  varying vec2 vUv;

  // --- value noise + fbm -------------------------------------------------
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 6; i++) {
      v += amp * noise(p);
      p = rot * p * 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    // aspect-correct coordinates, independent of plane geometry
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    float t = uTime * (1.0 - 0.97 * uReduced);

    // gentle parallax drift from the pointer
    vec2 p = uv * 2.9 + uMouse * 0.18;
    p += vec2(0.03, 0.018) * t; // slow continental drift

    // domain warp for organic, map-like ridges
    vec2 q = vec2(fbm(p + vec2(0.0, 1.7)), fbm(p + vec2(4.3, 2.1)));
    float h = fbm(p + 0.7 * q + 0.05 * t);

    // a soft "island" bias so contours cluster like a coastline / harbor
    float island = 0.55 - 0.45 * length(uv * vec2(0.85, 1.15) - vec2(0.05, 0.0));
    h = mix(h, h * 0.6 + island, 0.45);

    // --- contour lines from the height field ---------------------------
    float levels = 24.0;
    float hs = h * levels;
    float w = fwidth(hs);

    // anti-aliased line at every integer level (canonical topo contour)
    float dist = abs(fract(hs - 0.5) - 0.5);
    float contour = 1.0 - smoothstep(0.0, w * 1.6, dist);
    contour = clamp(contour, 0.0, 1.0);

    // index contours (every 5th line) read heavier / brighter
    float band = floor(hs);
    float isIndex = 1.0 - step(0.001, mod(band, 5.0));

    vec3 col = uBg;

    // base contour ink
    vec3 ink = mix(uLine, uIndex, isIndex);
    float strength = contour * mix(0.6, 1.0, isIndex);

    // sparse accent: tint a single index ring that drifts over time
    float accentBand = mod(band, 20.0);
    float accentSel = isIndex
                    * smoothstep(0.4, 1.0, 0.5 + 0.5 * sin(t * 0.25 + band));
    float accentMask = step(14.0, accentBand) * accentSel;
    ink = mix(ink, uAccent, accentMask * 0.9);

    col = mix(col, ink, strength);

    // subtle vignette for depth
    float vig = smoothstep(1.4, 0.25, length(uv));
    col *= 0.9 + 0.1 * vig;

    // faint film grain to kill banding
    float g = hash(gl_FragCoord.xy + t) * 0.025 - 0.0125;
    col += g;

    gl_FragColor = vec4(col, 1.0);
  }
`;

// App renders dark-only (see ThemeContext); monochrome ink palette.
const palette = {
  bg: new THREE.Color("#0A0A0A"),
  line: new THREE.Color("#6F6F6F"),
  index: new THREE.Color("#B4B4B4"),
  accent: new THREE.Color("#FF4D42"),
};

function ContourPlane({
  mouse,
  reduced,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
  reduced: boolean;
}) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uBg: { value: palette.bg.clone() },
      uLine: { value: palette.line.clone() },
      uIndex: { value: palette.index.clone() },
      uAccent: { value: palette.accent.clone() },
      uReduced: { value: reduced ? 1 : 0 },
    }),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    const dpr = Math.min(viewport.dpr || 1, 2);
    uniforms.uResolution.value.set(size.width * dpr, size.height * dpr);
  }, [size, viewport.dpr, uniforms]);

  useEffect(() => {
    uniforms.uReduced.value = reduced ? 1 : 0;
  }, [reduced, uniforms]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    if (mouse.current) {
      // smooth follow
      uniforms.uMouse.value.x +=
        (mouse.current.x - uniforms.uMouse.value.x) * 0.03;
      uniforms.uMouse.value.y +=
        (mouse.current.y - uniforms.uMouse.value.y) * 0.03;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function TopographicBackground() {
  const mouse = useRef({ x: 0, y: 0 });
  const reducedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20" aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <ContourPlane mouse={mouse} reduced={reducedRef.current} />
      </Canvas>
    </div>
  );
}
