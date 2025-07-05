import { usePokemonStore } from "../../store/PokemonStore";

export const StoredPokemonList = () => {
  const storedPokemons = usePokemonStore((s) => s.storedPokemons);
  const addToTeam = usePokemonStore((s) => s.addToTeam);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-3xl md:text-5xl text-primary text-shadow-neutral-700 text-center my-8">
        Storage
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {storedPokemons.length > 0 &&
          storedPokemons.map((pokemon, key) => {
            return (
              <div
                className="flex flex-col justify-center items-center p-5 bg-white border-4 rounded-3xl"
                key={key}
              >
                <h3 className="text-3xl font-semibold text-center pb-1 capitalize">
                  {pokemon.name}
                </h3>
                <img className="h-40 w-40 mx-1" src={pokemon.image} alt="" />
                <ul className="flex gap-2">
                  {pokemon.types.map((type, i) => (
                    <li key={i}>
                      <img className="h-5 w-20 my-0" src={type} alt="" />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addToTeam(pokemon)}
                  className="w-full h-10 my-3 rounded-lg bg-green-800 text-gray-200 font-semibold py-2"
                >
                  Add To Team
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
