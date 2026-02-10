import { makeInitialWorld } from "../world.js";

export const restartSystem = (world) => {
  const keys = world.ui.keysDown;

  // ako si gameOver i pritisne Space -> resetuj world
  if (world.gameOver && (keys[" "] || keys["Spacebar"] || keys["Space"])) {
    return makeInitialWorld();
  }

  return world;
};
