import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { Catcher } from "./components/sections/Catcher";
import { MyPokemonList } from "./components/sections/MyPokemonList";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [myPokemons, setMyPokemons] = useState([]);

  function getDifficulty(stats) {
    const hp = stats.find((s) => s.stat.name === "hp").base_stat;
    const attack = stats.find((s) => s.stat.name === "attack").base_stat;
    const defense = stats.find((s) => s.stat.name === "defense").base_stat;

    const strength = hp + attack + defense;
    let tier = "";
    if (strength <= 150) {
      tier = "Easy";
    } else if (strength <= 250) {
      tier = "Intermediate";
    } else {
      tier = "Difficult";
    }

    return tier
  }

  async function getTypeImage(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data.sprites["generation-viii"]["sword-shield"].name_icon;
  }

  async function fetchPokemon() {
    const pokemonNum = Math.floor(Math.random() * 1024);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`;

    setLoading(true); // start loading
    const res = await fetch(url);
    const data = await res.json();

    const pokemonData = {
      name: data.name,
      types: [],
      image: data.sprites.other["official-artwork"].front_default,
    };

    const typeImagePromises = data.types.map((type) =>
      getTypeImage(type.type.url)
    );
    const typeArray = await Promise.all(typeImagePromises);
    pokemonData.types.push(...typeArray);

    pokemonData.tier = getDifficulty(data.stats);

    setPokemon(pokemonData);
    setLoading(false); // done loading
  }

  function clickRandom() {
    setPokemon(null);
    fetchPokemon();
  }

  function catchPokemon() {
    const arrayCopy = [...myPokemons, pokemon];
    setMyPokemons(arrayCopy);

  }

  useEffect(() => {
  console.log("Updated Pokémon list:", myPokemons);
}, [myPokemons]);

  return (
    <Layout title={"Pokemon Catcher"}>
      <Catcher
        clickRandom={clickRandom}
        catchPokemon={catchPokemon}
        pokemon={pokemon}
        loading={loading}
       />
       <MyPokemonList myPokemons={myPokemons}/>
    </Layout>
  );
}

export default App;
