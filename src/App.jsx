import {useState} from 'react';
import { Layout } from "./components/Layout";
import { Catcher } from './components/sections/Catcher';



function App() {
  const [pokemon, setPokemon] = useState(null);

  function clickRandom() {
    const pokemonNum = Math.floor(Math.random() * 1024)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}`

    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        setPokemon(data)
        console.log(data);

      })
  }


  return (
    <Layout title={"Pokemon Catcher"}>
      <Catcher clickRandom={clickRandom} pokemon={pokemon}/>
    </Layout>
  )
}

export default App
