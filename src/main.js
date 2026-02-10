import { makeInitialWorld } from "./world.js";
import { step } from "./ecs/core.js";

import { initUI, uiSystem } from "./systems/ui.js";
import { inputApplySystem } from "./systems/inputApply.js";
import { spawnSystem } from "./systems/spawn.js";
import { physicsSystem } from "./systems/physics.js";
import { collisionSystem } from "./systems/collision.js";
import { scoreSystem } from "./systems/score.js";
import { renderSystem } from "./systems/render.js";
import { restartSystem } from "./systems/restart.js";
import { despawnSystem } from "./systems/despawn.js";
import { boundsSystem } from "./systems/bounds.js";


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.font = "16px Arial";

const getUI = initUI();

const systems = [
  uiSystem(getUI),                              // UI
  restartSystem,                                // restart na Space
  inputApplySystem,                             // 
  spawnSystem,                                  // 
  physicsSystem,                                // 
  boundsSystem(canvas.width, canvas.height),    // GRANIČNIK
  despawnSystem(canvas.height),                 // čisti prepreke
  collisionSystem,                              // 
  scoreSystem,                                  // 
  renderSystem(ctx, canvas)                     // Rendering
];

let world = makeInitialWorld();
let last = performance.now();

const loop = (now) => {
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;

  world = step(systems, dt)(world);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
