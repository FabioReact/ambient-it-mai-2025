import type { Hero } from "../types/hero";

export const getHeroById = async (id: string): Promise<Hero|undefined> => {
  try {
    const response = await fetch(`http://localhost:4000/heroes/${id}`);
    if (response.status === 404) throw new Error('404 - Hero not found')
    const data = await response.json();
    return data
  } catch (e) {
    console.error(e)
  }
}

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

export const getHeroesByName = async (heroName: string): Promise<Hero[]|undefined> => {
  try {
    const response = await fetch(`http://localhost:4000/heroes?name_like=${heroName}`);
    if (response.status === 404) throw new Error('404 - Hero not found')
    const data = await response.json();
    return data
  } catch (e) {
    console.error(e)
  }
}
