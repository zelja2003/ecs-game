import { query, addComponent } from "../ecs/core.js";

export const physicsSystem = (world, dt) => {
  const ids = query(world, ["position", "velocity"]);
  const pos = world.components.position;
  const vel = world.components.velocity;

  return ids.reduce((w, id) => {
    const p = pos[id], v = vel[id];
    return addComponent(w, "position", id, { x: p.x + v.x * dt, y: p.y + v.y * dt });
  }, world);
};
