import { usePokemonStore } from "../../store/PokemonStore";

export const StoredPokemonList = () => {
  const storedPokemons = usePokemonStore((s) => s.storedPokemons);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-3xl md:text-5xl text-primary text-shadow-neutral-700 text-center">
        Storage
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {storedPokemons.length > 0 &&
          storedPokemons.map((pokemon, key) => {
            return (
              <div className="flex grow-1" key={key}>
                <img className="h-20 w-20 mx-1" src={pokemon.image} alt="" />
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold text-center pb-1 capitalize">
                    {pokemon.name}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2 pb-3">
                    {pokemon.types.map((type, i) => (
                      <li key={i}>
                        <img className="h-4 w-16 my-0" src={type} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
