export const RandomCard = ({ pokemon, catchPokemon, result, isDisabled }) => {
  return (
    <div className="bg-gray-600 p-2 rounded-3xl relative">
      {result === "caught" && (
        <div className="absolute inset-0 z-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                width: "12px",
                height: "12px",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="bg-white rounded-3xl p-8 flex flex-col relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold uppercase tracking-wider px-3 py-2 rounded-full bg-gray-600">
          {pokemon.tier}
        </div>
        <h3 className="text-4xl font-semibold text-center pb-4 capitalize">
          {pokemon.name}
        </h3>
        <ul className="grid grid-cols-2 gap-2 pb-3">
          {pokemon.types.map((type, key) => {
            return (
              <li key={key}>
                <img className="h-6 w-24" src={type} alt="" />
              </li>
            );
          })}
        </ul>
        <img className="h-48 w-48 mx-auto" src={pokemon.image} alt="" />
        <div className="mt-8 bottom-0">
          {!isDisabled ? (
            <button
              onClick={catchPokemon}
              className="w-full transform transition-transform duration-300 hover:scale-105 bg-blue-800 rounded-full text-white font-bold py-2 "
            >
              Catch Pokemon
            </button>
          ) : (
            <button
              disabled={isDisabled}
              className="w-full hover:scale-105 bg-gray-600 rounded-full text-white font-bold py-2 "
            >
              {result === "caught" ? "✅ You caught it!" : "❌ It escaped!"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
