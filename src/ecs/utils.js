export const assoc = (obj, key, val) => ({ ...obj, [key]: val });

export const assocPath = (obj, [k, ...ks], val) => {
  if (k == null) return val;
  const child = obj?.[k];
  const nextChild = ks.length ? assocPath(child ?? {}, ks, val) : val;
  return { ...(obj ?? {}), [k]: nextChild };
};
