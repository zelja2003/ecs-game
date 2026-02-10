import { query } from "../ecs/core.js";

export const renderSystem = (ctx, canvas) => (world) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const ids = query(world, ["position", "sprite"]);
  const pos = world.components.position;
  const spr = world.components.sprite;

  ids.forEach((id) => {
    const p = pos[id], s = spr[id];
    ctx.fillStyle = s.color;
    ctx.fillRect(p.x - s.w / 2, p.y - s.h / 2, s.w, s.h);
  });

  const sc = world.components.score?.value ?? 0;
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${sc.toFixed(1)}`, 10, 20);

  const score = world.components.score?.value ?? 0;
  const level = Math.floor(score / 15);
  const every = world.spawn?.every ?? 0.8;
  const speed = world.spawn?.baseFallSpeed ?? 180;

  ctx.fillText(`Level: ${level} | spawn: ${every.toFixed(2)}s`, 10, 40);


  if (world.gameOver) ctx.fillText("GAME OVER — press SPACE to restart", 70, 200);

  return world;
};
