export const getHeroesByFirstLetter = async (letter: string) => {
  const controller = new AbortController();
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`, {
    signal: controller.signal,
  });
  const data = await response.json();
  return {
    data, // équivalent à data: data
    controller,
  };
};
