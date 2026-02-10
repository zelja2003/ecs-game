export const scoreSystem = (world, dt) => {
  if (world.gameOver) return world;
  const score = world.components.score?.value ?? 0;
  return {
    ...world,
    components: { ...world.components, score: { value: score + dt } }
  };
};
