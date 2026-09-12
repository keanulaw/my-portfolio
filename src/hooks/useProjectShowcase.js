import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { showcaseFrame } from "../lib/showcase";

// Pin only where the stage has room; activation never depends on pointer or focus.
const query = "(min-width: 1000px) and (min-height: 680px)";

export default function useProjectShowcase(count) {
  const railRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(null);
  const [enabled, setEnabled] = useState(
    () => window.matchMedia(query).matches,
  );
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setEnabled(media.matches);
      setReduced(motion.matches);
    };
    update();
    media.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  useLayoutEffect(() => {
    const rail = railRef.current;
    const stage = stageRef.current;
    const panels = [...stage.querySelectorAll(".showcase-panel")];
    const copies = panels.map((panel) => panel.querySelector(".showcase-copy"));
    const reset = () => {
      rail.style.removeProperty("height");
      panels.forEach((panel) => {
        panel.removeAttribute("style");
        panel.inert = false;
        panel.removeAttribute("aria-hidden");
      });
      copies.forEach((copy) => copy.style.removeProperty("opacity"));
    };
    if (!enabled) {
      reset();
      return;
    }
    let frame = 0;
    let lastActive = -1;
    let lastPosition = -Infinity;
    let metrics = { start: 0, step: 1 };
    const render = () => {
      frame = 0;
      // The flagship gets an extra half chapter of reading time.
      const position = (window.scrollY - metrics.start) / metrics.step;
      const chapterPosition = position <= 1.5 ? position / 1.5 : position - 0.5;
      if (chapterPosition === lastPosition) return;
      lastPosition = chapterPosition;
      const {
        base,
        mix,
        active: nextActive,
        progress,
      } = showcaseFrame(chapterPosition, count);
      panels.forEach((panel, i) => {
        const outgoing = i === base;
        const incoming = i === base + 1;
        // Reduced motion keeps the same automatic sequence, with no interpolation.
        const opacity = reduced
          ? Number(i === nextActive)
          : outgoing
            ? 1 - mix
            : incoming
              ? mix
              : 0;
        const travel = reduced ? 0 : outgoing ? -mix : incoming ? 1 - mix : 0;
        panel.style.opacity = opacity;
        panel.style.visibility = opacity > 0 ? "visible" : "hidden";
        panel.style.setProperty("--chapter-y", `${travel * 36}px`);
        panel.style.setProperty(
          "--chapter-scale",
          reduced ? 1 : outgoing ? 1 - mix * 0.025 : 1 + (1 - mix) * 0.025,
        );
        panel.style.setProperty(
          "--chapter-turn",
          `${travel * (i % 2 ? -0.35 : 0.35)}deg`,
        );
        panel.style.setProperty("--copy-y", `${travel * 18}px`);
        copies[i].style.opacity = reduced
          ? Number(i === nextActive)
          : outgoing
            ? Math.max(0, 1 - mix * 2.5)
            : incoming
              ? Math.max(0, (mix - 0.45) / 0.55)
              : 0;
        panel.inert = i !== nextActive;
        panel.setAttribute("aria-hidden", String(i !== nextActive));
      });
      if (nextActive !== lastActive) {
        const focusedPanel = document.activeElement?.closest(".showcase-panel");
        if (focusedPanel && focusedPanel !== panels[nextActive])
          panels[nextActive].querySelector("h3").focus({ preventScroll: true });
        lastActive = nextActive;
        setActive(nextActive);
      }
      progressRef.current?.style.setProperty(
        "transform",
        `scaleX(${(1 + progress * (count - 1)) / count})`,
      );
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const measure = () => {
      const height = stage.offsetHeight;
      const step = Math.max(460, height * 0.9);
      rail.style.height = `${height + step * (count - 1 + 0.5 + 0.35)}px`;
      metrics = {
        start: rail.getBoundingClientRect().top + window.scrollY - 88,
        step,
      };
      lastPosition = -Infinity;
      render();
    };
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(stage);
    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", measure);
      reset();
    };
  }, [enabled, reduced, count]);

  return { railRef, stageRef, progressRef, enabled, active };
}
