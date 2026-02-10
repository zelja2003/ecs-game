const aabb = (p1, c1, p2, c2) =>
  Math.abs(p1.x - p2.x) * 2 < (c1.w + c2.w) &&
  Math.abs(p1.y - p2.y) * 2 < (c1.h + c2.h);

export const collisionSystem = (world) => {
  const { position, collider, player, obstacle } = world.components;

  const players = Object.keys(player ?? {});
  const obstacles = Object.keys(obstacle ?? {});

  const hit = players.some((pid) =>
    obstacles.some((oid) => aabb(position[pid], collider[pid], position[oid], collider[oid]))
  );

  return hit ? { ...world, gameOver: true } : world;
};
