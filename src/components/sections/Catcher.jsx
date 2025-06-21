export const Catcher = ({ clickRandom, pokemon }) => {
  return (
    <section className="pt-32 flex flex-col justify-center items-center space-y-4">
      <button
        onClick={clickRandom}
        className="px-6 py-3 w-30 outline-none rounded-2xl relative cursor-pointer overflow-hidden border-transparent bg-red-600 font-semibold transform transition-transform duration-300 hover:scale-105 text-white"
      >
        Random
      </button>
      {pokemon && (
        <div className="relative group h-full">
          <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-1 rounded-3xl h-full">
            <div className="bg-white border-box-border rounded-3xl shadow-lg shadow-box-shadows p-8 flex flex-col h-full relative">
              <h3 className="text-3xl font-semibold text-heading-1 text-center pb-3 capitalize">
                {pokemon.name}
              </h3>
              <ul className="flex flex-wrap gap-2 pb-3">
                {pokemon.types.map((type, key) => {
                  return <li key={key} className="bg-orange-600 rounded-full px-3 py-1 text-white">{type.type.name}</li>;
                })}
              </ul>
              <img
                className="h-48 w-48"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt=""
              />
              <div className="mt-8 bottom-0">
                <button className="w-full transform transition-transform duration-300 hover:scale-105 text-white ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
