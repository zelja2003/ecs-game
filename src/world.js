import { createEntity, addComponent } from "./ecs/core.js";

export const makeInitialWorld = () => {
  let world = {
    nextId: 1,
    entities: {},
    components: { score: { value: 0 } },
    ui: { keysDown: {} },
    spawn: { t: 0, every: 0.8 },
    gameOver: false
  };

  const [w1, playerId] = createEntity(world);
  world = addComponent(w1, "position", playerId, { x: 200, y: 360 });
  world = addComponent(world, "velocity", playerId, { x: 0, y: 0 });
  world = addComponent(world, "sprite", playerId, { w: 40, h: 20, color: "blue" });
  world = addComponent(world, "collider", playerId, { w: 40, h: 20 });
  world = addComponent(world, "input", playerId, { left: false, right: false });
  world = addComponent(world, "player", playerId, true);

  return world;
};
