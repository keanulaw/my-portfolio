import { useEffect, useRef } from "react";

const DURATION = 60; // seconds shown on the ruler
const FPS = 24;
const REST = 0.38; // where the playhead settles after the intro
const marks = [0, 12, 24, 36, 48, 60];

// Deterministic bars so the waveform is stable between renders.
const bars = Array.from({ length: 140 }, (_, i) => {
  const swell = Math.sin(i / 9) * 0.35 + Math.sin(i / 3.1) * 0.25;
  return Math.max(0.12, Math.min(1, 0.5 + swell + ((i * 37) % 11) / 40));
});

const pad = (n) => String(n).padStart(2, "0");
function timecode(fraction) {
  const frames = Math.round(fraction * DURATION * FPS);
  const seconds = Math.floor(frames / FPS);
  return `00:${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}:${pad(frames % FPS)}`;
}

export default function Hero() {
  const stageRef = useRef(null);
  const headRef = useRef(null);
  const readoutRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = reduced ? REST : 0;
    let target = REST;
    let frame = 0;

    const paint = () => {
      headRef.current.style.setProperty("--x", `${current * 100}%`);
      readoutRef.current.textContent = timecode(current);
    };
    const tick = () => {
      current += (target - current) * 0.16;
      if (Math.abs(target - current) < 0.0005) current = target;
      paint();
      frame = current === target ? 0 : requestAnimationFrame(tick);
    };
    const go = (next) => {
      target = Math.min(1, Math.max(0, next));
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMove = (event) => {
      const box = stage.getBoundingClientRect();
      go((event.clientX - box.left) / box.width);
    };

    paint();
    // Intro: the playhead plays in from zero, then follows the pointer.
    if (!reduced) setTimeout(() => go(REST), 350);
    stage.addEventListener("pointermove", onMove);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="shell hero">
      <div className="hero-top">
        <span className="availability">
          <i /> Available for opportunities
        </span>
        <span>Cebu, Philippines</span>
      </div>
      <h1>
        Shannon Keanu
        <br />
        A. Yase
      </h1>

      <div className="timeline" ref={stageRef}>
        <div className="timeline-gutter" aria-hidden="true">
          <span className="gutter-ruler" />
          <span>V2</span>
          <span>V1</span>
          <span>A1</span>
        </div>
        <div className="timeline-body" aria-hidden="true">
          <div className="ruler">
            {marks.map((m) => (
              <span key={m} style={{ left: `${(m / DURATION) * 100}%` }}>
                {`00:${pad(m)}`}
              </span>
            ))}
          </div>
          <div className="lane">
            <span className="clip clip-web" style={{ "--from": "22%", "--to": "82%" }}>
              Web developer
            </span>
          </div>
          <div className="lane">
            <span className="clip clip-ai" style={{ "--from": "0%", "--to": "62%" }}>
              AI tools developer
            </span>
          </div>
          <div className="lane">
            <span className="clip clip-audio" style={{ "--from": "0%", "--to": "100%" }}>
              <svg viewBox="0 0 140 40" preserveAspectRatio="none" focusable="false">
                {bars.map((h, i) => (
                  <path
                    key={i}
                    d={`M${i + 0.5} ${20 - h * 18}V${20 + h * 18}`}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              <b>Video automation</b>
            </span>
          </div>
          <div className="playhead" ref={headRef}>
            <output ref={readoutRef}>00:00:00:00</output>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-description">
          I build practical AI workflows, web applications, and video
          automation systems that turn raw footage into client-ready content.
        </p>
        <div className="actions">
          <a className="button" href="#projects">
            See the work
          </a>
          <a className="text-link" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
