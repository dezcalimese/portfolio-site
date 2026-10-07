import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Link-preview card (Slack, iMessage, LinkedIn, X): the hero, in miniature.
export const alt = "Dez Calimese — Applied AI & Blockchain Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const assets = join(process.cwd(), "app/_og");

export default async function OpengraphImage() {
  const [serif, mono, background] = await Promise.all([
    readFile(join(assets, "InstrumentSerif-Regular.ttf")),
    readFile(join(assets, "GeistMono-Regular.ttf")),
    readFile(join(assets, "background.jpg")),
  ]);
  const bg = `data:image/jpeg;base64,${background.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          color: "#0e0e0d",
          backgroundColor: "#f2f0ea",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(to bottom, rgba(242,240,234,0.86), rgba(242,240,234,0.5) 60%, rgba(242,240,234,0.36))",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "48px 56px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "Geist Mono",
              fontSize: 20,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span>Applied AI · Blockchain Engineer</span>
            <span>New York City</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Instrument Serif",
              fontSize: 220,
              lineHeight: 0.8,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
            }}
          >
            <span>Dez</span>
            <span style={{ alignSelf: "flex-end" }}>Calimese</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
