import { query } from "../ecs/core.js";

export const despawnSystem = (canvasH = 400) => (world) => {
  const ids = query(world, ["position", "obstacle"]);
  const pos = world.components.position;

  const toRemove = ids.filter((id) => pos[id].y > canvasH + 40);
  if (toRemove.length === 0) return world;

  // remove entity + njegove komponente (minimalno ovde ručno uklanjamo iz par tabela)
  const removeFromTable = (table, id) => {
    if (!table || table[id] === undefined) return table;
    const { [id]: _, ...rest } = table;
    return rest;
  };

  return toRemove.reduce((w, id) => {
    const comps = w.components;
    const comps2 = Object.keys(comps).reduce((acc, name) => {
      const table = comps[name];
      if (table && typeof table === "object") {
        acc[name] = removeFromTable(table, id);
      } else {
        acc[name] = table;
      }
      return acc;
    }, {});
    const { [id]: __, ...entities2 } = w.entities;
    return { ...w, entities: entities2, components: comps2 };
  }, world);
};
