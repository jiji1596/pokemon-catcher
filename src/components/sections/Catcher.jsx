import { RandomCard } from "../cards/RandomCard";

export const Catcher = ({
  clickRandom,
  pokemon,
  catchPokemon,
  error,
  isCatching,
  isFlipped,
  result,
  isDisabled,
}) => {
  return (
    <section className="pt-10 flex flex-col justify-start items-center lg:items-end space-y-4 lg:mr-16">
      <div className="lg:mr-12">
        <button
          onClick={clickRandom}
          className="px-6 py-3 outline-none rounded-2xl relative cursor-pointer overflow-hidden border-transparent bg-indigo-600 hover:bg-indigo-700 font-semibold transform transition-transform duration-300 hover:scale-105 text-white"
        >
          Draw Pokemon
        </button>
      </div>
      <div className="card-container w-[264px] h-[420px] my-8">
        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="card-front">
            {pokemon && (
              <RandomCard
                pokemon={pokemon}
                catchPokemon={catchPokemon}
                isCatching={isCatching}
                isFlipped={isFlipped}
                result={result}
                isDisabled={isDisabled}
              />
            )}
          </div>
          <div className="card-back">
            <img src={"/card_back.png"} alt="pokeball" />
          </div>
        </div>
      </div>

      {error && (
        <div className="pt-10">
          <p>Pokemon bag is full. Release a pokemon first.</p>
        </div>
      )}
    </section>
  );
};
