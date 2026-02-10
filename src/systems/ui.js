export const initUI = () => {
  const keysDown = {};

  window.addEventListener("keydown", (e) => (keysDown[e.key] = true));
  window.addEventListener("keyup", (e) => (keysDown[e.key] = false));

  return () => ({ keysDown: { ...keysDown } }); // snapshot kopija
};

export const uiSystem = (getUI) => (world) => ({ ...world, ui: getUI() });
