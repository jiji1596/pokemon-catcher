import { useState } from "react";
import { Layout } from "./components/Layout";
import { Catcher } from "./components/sections/Catcher";
import { MyPokemonList } from "./components/sections/MyPokemonList";
import { usePokemonFetcher } from "./hooks/usePokemonFetcher";

function App() {
  const [error, setError] = useState(null);
  const [myPokemons, setMyPokemons] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCatching, setIsCatching] = useState(false);
  const [result, setResult] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { pokemon, loading, fetchPokemon } = usePokemonFetcher();



  function clickRandom() {
    setError(false);
    setIsDisabled(false);
    setResult(null);
    fetchPokemon();
  }

  function catchPokemon() {
    if (myPokemons.length < 6) {
      setError(false);
      setIsFlipped(true);
      setIsCatching(true);
      setResult(null);
      setTimeout(() => {
        const catchRates = {
          Easy: 0.9,
          Intermediate: 0.6,
          Difficult: 0.3,
        };
        const catchChance = catchRates[pokemon.tier];
        const wasCaught = Math.random() < catchChance;
        setResult(wasCaught ? "caught" : "escaped");
        setIsDisabled(true);
        if (wasCaught) {
          const arrayCopy = [...myPokemons, pokemon];
          setMyPokemons(arrayCopy);
        }

        setIsCatching(false);
        setIsFlipped(false);
      }, 1500);
    } else {
      setError(true);
    }
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
