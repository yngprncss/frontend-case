import React from 'react';
import { MoveDesc, Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon ;
  moves?: MoveDesc[] ; 
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon , moves }) => {
  console.log(pokemon);
  
  if (pokemon && moves) {
    return (
      <div className='infoContainer'>
        <div className='headerFrame'> 
          <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        </div>

        <div className='imageFrame'>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} illustration`}/>
        </div>
        
        <div className='descriptionFrame'>
          <p>NO: {pokemon.id}. HT: {pokemon.height} dm. WT: {pokemon.weight} hg.</p>
        </div>
        
        <div className='moveFrame'>
          <h2>{moves[0].name} </h2>
          <p>{moves[0].flavor_text_entries[0].flavor_text}</p>
        </div>
        
        <div className='moveFrame'>
          <h2>{moves[1].name} </h2>
          <p>{moves[1].flavor_text_entries[1].flavor_text}</p>
        </div>

        <div className='cardInfoFrame'>
          <p>Supersjeldent kort, kun ett i hele verden</p>
          </div>
      </div>
   
    );
  }
  return null;
};
export default InfoContainer;
