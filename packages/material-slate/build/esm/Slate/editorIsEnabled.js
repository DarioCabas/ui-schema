export const editorIsEnabled = (enableOnly, type) => {
  return !enableOnly || !type || enableOnly.contains(type);
};