export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Each chapter holds before the final 38% of its scroll interval transitions.
export function showcaseFrame(progress, count) {
  const p = clamp(progress, 0, count - 1);
  const base = Math.floor(p);
  const t = clamp((p - base - 0.62) / 0.38, 0, 1);
  const mix = t * t * (3 - 2 * t);
  return {
    base,
    mix,
    active: Math.min(count - 1, base + (mix >= 0.5 ? 1 : 0)),
    progress: p / (count - 1),
  };
}
