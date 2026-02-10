import { assoc, assocPath } from "./utils.js";

const has = (table, id) => table && table[id] !== undefined;

export const createEntity = (world) => {
  const id = world.nextId;
  const w1 = assoc(world, "nextId", id + 1);
  const w2 = assocPath(w1, ["entities", id], true);
  return [w2, id];
};

export const addComponent = (world, compName, id, data) =>
  assocPath(world, ["components", compName, id], data);

export const query = (world, required) => {
  const ids = Object.keys(world.entities);
  const comps = world.components;
  return ids.filter((id) => required.every((c) => has(comps[c], id)));
};

export const step = (systems, dt) => (world) =>
  systems.reduce((w, sys) => sys(w, dt), world);
