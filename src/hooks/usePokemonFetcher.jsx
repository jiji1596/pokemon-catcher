import { getDifficulty, getTypeImage } from "../utils/pokemon";

export async function fetchRandomPokemon() {
  const pokemonNum = Math.floor(Math.random() * 1024);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const pokemonData = {
    id: data.id,
    name: data.name,
    types: [],
    image: data.sprites.other["official-artwork"].front_default,
    tier: getDifficulty(data.stats),
  };

  const typeImagePromises = data.types.map((type) =>
    getTypeImage(type.type.url)
  );
  const typeArray = await Promise.all(typeImagePromises);
  pokemonData.types.push(...typeArray);

  return pokemonData;
}
