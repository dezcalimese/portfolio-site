import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

// A section counts as active while it crosses the vertical middle of the
// viewport, which works for sections both shorter and taller than the screen.
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    rootMargin: "-50% 0px -50% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
