export const MyPokemonList = ({ myPokemons }) => {
  return (
    <section>
      <div className="flex flex-col items-center lg:items-start">
        <div className="text-center">
          <h1 className="">My Team</h1>
        </div>
        <div>
          {myPokemons.length > 0 &&
            myPokemons.map((pokemon, key) => {
              return (
                <div key={key} className="relative group h-26 w-88 pt-2 mb-0">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-2 rounded-3xl h-full">
                    <div className="bg-white border-box-border rounded-3xl shadow-lg shadow-box-shadows p-1 flex justify-start space-x-2  h-full relative">
                      <img className="ml-3 h-18 w-18" src={pokemon.image} alt="" />
                      <div className="flex flex-col justify-center items-start">
                        <h3 className="text-xl font-semibold text-center pb-1 capitalize text-blue-800">
                          {pokemon.name}
                        </h3>
                        <ul className="grid grid-cols-2 gap-2 pb-3">
                          {pokemon.types.map((type, key) => {
                            return (
                              <li key={key}>
                                <img className="h-4 w-16" src={type} alt="" />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
