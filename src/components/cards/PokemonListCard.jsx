export const PokemonListCard = ({pokemon}) => {
  return (
    <div className="flex grow-1">
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
      <button className="w-20 h-10 my-auto ml-3 rounded-lg bg-red-700 text-white hover:bg-red-600 font-semibold py-2 ">Store</button>
    </div>
  );
};
