import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { showcaseFrame } from "../lib/showcase";

const query =
  "(min-width: 1000px) and (min-height: 760px) and (hover: hover) and (pointer: fine)";

export default function useProjectShowcase(count, viewMode) {
  const railRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(null);
  const metricsRef = useRef({ start: 0, step: 1 });
  const [capable, setCapable] = useState(false);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(true);
  const enabled =
    capable && viewMode !== "list" && (!reduced || viewMode === "gallery");

  useEffect(() => {
    const media = window.matchMedia(query);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setCapable(media.matches);
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
    if (!enabled) {
      rail.style.removeProperty("height");
      panels.forEach((panel) => {
        panel.removeAttribute("style");
        panel.inert = false;
        panel.removeAttribute("aria-hidden");
      });
      copies.forEach((copy) => copy.style.removeProperty("opacity"));
      return;
    }
    let frame = 0;
    let lastActive = -1;
    let lastProgress = -1;
    const render = () => {
      frame = 0;
      const { start, step } = metricsRef.current;
      const {
        base,
        mix,
        active: nextActive,
        progress,
      } = showcaseFrame((window.scrollY - start) / step, count);
      if (progress === lastProgress) return;
      lastProgress = progress;
      panels.forEach((panel, i) => {
        const outgoing = i === base;
        const incoming = i === base + 1;
        const opacity = outgoing ? 1 - mix : incoming ? mix : 0;
        const travel = outgoing ? -mix : incoming ? 1 - mix : 0;
        panel.style.opacity = opacity;
        panel.style.visibility = opacity > 0 ? "visible" : "hidden";
        panel.style.setProperty("--chapter-y", `${travel * 36}px`);
        panel.style.setProperty(
          "--chapter-scale",
          outgoing ? 1 - mix * 0.025 : 1 + (1 - mix) * 0.025,
        );
        panel.style.setProperty(
          "--chapter-turn",
          `${travel * (i % 2 ? -0.35 : 0.35)}deg`,
        );
        panel.style.setProperty("--copy-y", `${travel * 18}px`);
        // Text exits before the next paragraph enters, avoiding double exposure.
        copies[i].style.opacity = outgoing
          ? Math.max(0, 1 - mix * 2.5)
          : incoming
            ? Math.max(0, (mix - 0.45) / 0.55)
            : 0;
        panel.inert = i !== nextActive;
        panel.setAttribute("aria-hidden", String(i !== nextActive));
      });
      if (nextActive !== lastActive) {
        // Don't leave keyboard focus stranded in a chapter that becomes inert.
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
      rail.style.height = `${height + step * (count - 1) + step * 0.35}px`;
      metricsRef.current = {
        start: rail.getBoundingClientRect().top + window.scrollY - 88,
        step,
      };
      queue();
    };
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(stage);
    // Fonts and content above the rail can move its starting position.
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
      rail.style.removeProperty("height");
      panels.forEach((panel) => {
        panel.removeAttribute("style");
        panel.inert = false;
        panel.removeAttribute("aria-hidden");
      });
      copies.forEach((copy) => copy.style.removeProperty("opacity"));
    };
  }, [enabled, count]);

  function goTo(index) {
    if (enabled)
      window.scrollTo({
        top: metricsRef.current.start + metricsRef.current.step * index,
        behavior: "smooth",
      });
    else {
      const panel = stageRef.current.querySelectorAll(".showcase-panel")[index];
      panel?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  return {
    railRef,
    stageRef,
    progressRef,
    capable,
    reduced,
    enabled,
    active,
    goTo,
  };
}
