import { createEntity, addComponent } from "../ecs/core.js";

export const spawnSystem = (world, dt) => {
  const spawn = world.spawn ?? { t: 0, every: 0.8 };

  const score = world.components.score?.value ?? 0;
  const level = Math.floor(score / 15);

  const baseEvery = spawn.baseEvery ?? spawn.every ?? 0.8;
  const baseFallSpeed = spawn.baseFallSpeed ?? 180;

  const fallSpeed = baseFallSpeed + level * 35;
  const every = Math.max(0.25, baseEvery - level * 0.08);

  const t2 = (spawn.t ?? 0) + dt;
  const worldWithSpawn = { ...world, spawn: { ...spawn, t: t2, every, baseEvery, baseFallSpeed } };

  if (t2 < every) return worldWithSpawn;

  const [w1, id] = createEntity({ ...worldWithSpawn, spawn: { ...worldWithSpawn.spawn, t: 0 } });

  const x = 20 + Math.random() * 360;

  let w = w1;
  w = addComponent(w, "position", id, { x, y: -20 });
  w = addComponent(w, "velocity", id, { x: 0, y: fallSpeed });
  w = addComponent(w, "sprite", id, { w: 30, h: 30, color: "red" });
  w = addComponent(w, "collider", id, { w: 30, h: 30 });
  w = addComponent(w, "obstacle", id, true);

  return w;
};
