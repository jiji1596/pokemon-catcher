import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchRandomPokemon } from "../hooks/usePokemonFetcher";
import { StoredPokemonList } from "../components/sections/StoredPokemonList";

export const usePokemonStore = create(
  persist(
    (set, get) => ({
      pokemon: null,
      myPokemons: [],
      error: null,
      isFlipped: true,
      isCatching: false,
      isDisabled: false,
      result: null,
      storedPokemons: [],
      fetchPokemon: async () => {
        const data = await fetchRandomPokemon();
        set({ pokemon: data });
        const audio = new Audio(
          `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`
        );
        audio.play();
      },
      catchPokemon: () => {
        if (get().myPokemons.length < 6) {
          set({
            error: false,
            isDisabled: false,
            result: null,
            isFlipped: true,
          });
          setTimeout(() => {
            const catchRates = {
              Easy: 0.9,
              Intermediate: 0.6,
              Difficult: 0.3,
            };
            const catchChance = catchRates[get().pokemon.tier];
            const wasCaught = Math.random() < catchChance;
            set({ result: wasCaught ? "caught" : "escaped" });
            set({ isDisabled: true });
            if (wasCaught) {
              const arrayCopy = [...get().myPokemons, get().pokemon];
              set({ myPokemons: arrayCopy });
            }
            set({ isCatching: false });
            set({ isFlipped: false });
          }, 1500);
        } else {
          set({ error: true });
        }
      },
      clickRandom: async () => {
        set({
          error: false,
          isDisabled: false,
          result: null,
          isFlipped: false,
        });
        await get().fetchPokemon();
      },
      store: (pokemon) => {
        const myPokemonsCopy = get().myPokemons
        const updatedPokemonsCopy = myPokemonsCopy.filter((myPokemon) => myPokemon.name !== pokemon.name )
        const storedCopy = [...get().storedPokemons, pokemon]
        set({
          storedPokemons: storedCopy,
          myPokemons: updatedPokemonsCopy
        })
      },
      addToTeam: (pokemon) => {
        const storedCopy = get().storedPokemons;
        const updated = storedCopy.filter((storedPokemon) => storedPokemon.id !== pokemon.id)
        const myTeamCopy = [...get().myPokemons, pokemon]
        set({
          storedPokemons: updated,
          myPokemons: myTeamCopy
        })

      }
    }),
    {
      name: "pokemon-storage",
    }
  )
);
