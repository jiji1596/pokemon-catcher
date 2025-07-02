import { useEffect } from "react";
import { usePokemonStore } from "./store/PokemonStore";
import { Layout } from "./components/Layout";
import { Catcher } from "./components/sections/Catcher";
import { MyPokemonList } from "./components/sections/MyPokemonList";
import { StoredPokemonList } from "./components/sections/StoredPokemonList";

function App() {
  const error = usePokemonStore((s) => s.error);
  const pokemon = usePokemonStore((s) => s.pokemon);
  const myPokemons = usePokemonStore((s) => s.myPokemons);
  const catchPokemon = usePokemonStore((s) => s.catchPokemon);
  const isFlipped = usePokemonStore((s) => s.isFlipped);
  const isCatching = usePokemonStore((s) => s.isCatching);
  const result = usePokemonStore((s) => s.result);
  const isDisabled = usePokemonStore((s) => s.isDisabled);
  const clickRandom = usePokemonStore((s) => s.clickRandom);

  useEffect(() => {
    console.log("My Pokémons updated:", myPokemons);
  }, [myPokemons]);

  return (
    <Layout title={"Pokemon Catcher"}>
      <div className="grid gap-y-10 sm:grid-cols-1 md:grid-cols-2 pt-24 md:pt-32 overflow-hidden ">
        <Catcher
          clickRandom={clickRandom}
          catchPokemon={catchPokemon}
          pokemon={pokemon}
          error={error}
          isCatching={isCatching}
          isFlipped={isFlipped}
          result={result}
          isDisabled={isDisabled}
        />
        <MyPokemonList myPokemons={myPokemons} />
      </div>
      <StoredPokemonList />
    </Layout>
  );
}

export default App;
