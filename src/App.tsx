import React, { useEffect, useState } from 'react';
import { fetchPokemon , fetchMove } from './utils';
import { Pokemon , MoveDesc } from './types';

import InfoContainer from './components/InfoContainer';

import './app.css';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>() 
  const [moveDesc, setMoves] = useState<MoveDesc[]>() 
  
  const getPokemonWithMoves = async () => { // fetches from utils.ts
    const p = await fetchPokemon('mewtwo') 
    const descMove1 = await fetchMove(p.moves[0].move.url) 
    const descMove2 = await fetchMove(p.moves[1].move.url) 

    setPokemon(p) 
    setMoves([descMove1 , descMove2]) 
    console.log('Test moveDesc')
    console.log(moveDesc);
  } 
  
  useEffect(() => {
    getPokemonWithMoves()
  }, []) ;

  return (
    <div className='appRoot'>
      <div className='backgroundFrame'>
        <InfoContainer pokemon={pokemon} moves = {moveDesc}/>
      </div>
    </div>
  );
} ;

export default App;
