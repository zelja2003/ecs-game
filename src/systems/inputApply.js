import { query, addComponent } from "../ecs/core.js";

export const inputApplySystem = (world) => {
  const ids = query(world, ["input", "velocity"]);
  const keys = world.ui.keysDown;
  const vel = world.components.velocity;
  const speed = 250;

  return ids.reduce((w, id) => {
    const vx =
      (keys["ArrowRight"] || keys["d"] ? 1 : 0) -
      (keys["ArrowLeft"] || keys["a"] ? 1 : 0);

    return addComponent(w, "velocity", id, { ...vel[id], x: vx * speed });
  }, world);
};
