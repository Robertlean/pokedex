import React from 'react'
import ErrorPokemon from '../img/757F.gif'

function PokedexScreen({ pokemon, loading, error }) {
  if(error){
    return (
      <div className="pokedex-screen">
        <img
          src={ErrorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    )
  }
  return (    
    <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <ul className="pokemon-stats">
          <ul className="pokemon-stats">
            {pokemon.stats.map(item => (
              <li key={item.stat.name} >{item.stat.name}</li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default PokedexScreen