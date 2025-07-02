import { PokemonListCard } from "../cards/PokemonListCard";

export const MyPokemonList = ({ myPokemons }) => {
  const slots = Array.from({ length: 6 }, (_, i) => myPokemons[i] || null);

  return (
    <section>
      <div className="flex flex-col items-center lg:items-start">
        <div className="bg-gray-600 p-2 rounded-3xl h-full">
          <div className="bg-white border-box-border rounded-3xl shadow-lg shadow-box-shadows p-1 flex justify-start space-x-2  h-full relative">
            <div className="absolute lg:-top-7 -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-full bg-gray-600">
              <h1 className="lg:text-xl text-md ">My Team</h1>
            </div>
            <div className="py-4 px-3">
              {slots.map((pokemon, key) => (
                <div
                  key={key}
                  className="relative group h-28 lg:w-88 w-72 pt-3 mb-0 flex items-center justify-center"
                >
                  <div className="bg-gray-600 p-2 rounded-3xl h-full w-full flex">
                    <div className="bg-white border-box-border rounded-3xl shadow-lg shadow-box-shadows p-1 flex h-full w-full relative">
                      <h1 className="ml-3 lg:text-xl text-md my-auto">#{key + 1}</h1>
                      {pokemon ? (
                       <PokemonListCard pokemon={pokemon} />
                      ) : (
                        // Empty slot
                        <div className="flex flex-col items-center justify-center mr-6 h-full w-full text-gray-400">
                          <span className="text-4xl">?</span>
                          <span className="text-xs">Empty</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
