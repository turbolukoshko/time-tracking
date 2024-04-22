export const generatePattern = (title: string) => {
  return title.replace(/\s+/g, "-").toLocaleLowerCase();
};
