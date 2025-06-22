import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { Catcher } from "./components/sections/Catcher";
import { MyPokemonList } from "./components/sections/MyPokemonList";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myPokemons, setMyPokemons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCatching, setIsCatching] = useState(false);
  const [result, setResult] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

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

    return tier;
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

  useEffect(() => {
    console.log(myPokemons);
  }, [myPokemons]);

  function clickRandom() {
    setError(false);
    setIsDisabled(false);
    setResult(null);
    setPokemon(null);
    fetchPokemon();
  }

  function catchPokemon() {
    setError(false);
    setIsFlipped(true);
    setIsCatching(true);
    setResult(null);
    setTimeout(() => {
      setIsDisabled(true);
      const catchRates = {
        Easy: 0.9,
        Intermediate: 0.6,
        Difficult: 0.3,
      };
      const catchChance = catchRates[pokemon.tier];
      const wasCaught = Math.random() < catchChance;
      setResult(wasCaught ? "caught" : "escaped");

      if (myPokemons.length < 6 && wasCaught) {
        const arrayCopy = [...myPokemons, pokemon];
        setMyPokemons(arrayCopy);
      } else {
        setError(true);
      }

      setIsCatching(false);
      setIsFlipped(false);
    }, 3000);
  }

  return (
    <Layout title={"Pokemon Catcher"}>
      <Catcher
        clickRandom={clickRandom}
        catchPokemon={catchPokemon}
        pokemon={pokemon}
        loading={loading}
        error={error}
        isCatching={isCatching}
        isFlipped={isFlipped}
        result={result}
        isDisabled={isDisabled}
      />
      <MyPokemonList myPokemons={myPokemons} />
    </Layout>
  );
}

export default App;
