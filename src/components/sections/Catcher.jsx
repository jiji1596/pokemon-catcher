import { RandomCard } from "../cards/RandomCard";

export const Catcher = ({ clickRandom, pokemon, loading, catchPokemon }) => {
  return (
    <section className="pt-32 flex flex-col justify-center items-center space-y-4">
      <button
        onClick={clickRandom}
        className="px-6 py-3 w-30 outline-none rounded-2xl relative cursor-pointer overflow-hidden border-transparent bg-red-600 font-semibold transform transition-transform duration-300 hover:scale-105 text-white"
      >
        Random
      </button>
      {loading && <div className="pt-10">
        <span className="loading loading-bars loading-lg"></span>
      </div> }
      {pokemon && (
        <RandomCard pokemon={pokemon} catchPokemon={catchPokemon}/>
      )}
    </section>
  );
};
