import { query, addComponent } from "../ecs/core.js";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export const boundsSystem = (canvasW, canvasH) => (world) => {
  // clamp samo za player entitete koji imaju position + sprite
  const ids = query(world, ["player", "position", "sprite"]);
  const pos = world.components.position;
  const spr = world.components.sprite;

  return ids.reduce((w, id) => {
    const p = pos[id];
    const s = spr[id];

    const halfW = (s.w ?? 0) / 2;
    const halfH = (s.h ?? 0) / 2;

    const nextP = {
      x: clamp(p.x, halfW, canvasW - halfW),
      y: clamp(p.y, halfH, canvasH - halfH)
    };

    return addComponent(w, "position", id, nextP);
  }, world);
};
