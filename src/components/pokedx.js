import React, { useState, useEffect } from 'react'
import PokedexScreen from './PokedexScreen'
import PokemonForm from './PokemonForm'
import axios from 'axios'


function Pokedex() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState(null)
  const RandomId = Math.floor(Math.random() * 105 + 1)
  const [pokemonID, setPokemonId] = useState(RandomId)

  const URI = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    getPokemon(pokemonID)
      .then(data => {
        // Si todo esta cool, actualizamos el pokemón
        // Y le indicamos que no hay error
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
        console.log(err)
      })
  }, [pokemonID])

  const getPokemon = async (id) => {
    const getID = axios.get(`${URI}${id}`)
    return getID
  }

  console.log(pokemon.data)

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`light is-sky is-big ${loading && 'is-animated'}`} />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen
            pokemon={pokemon.data}
            loading={loading}
            error={error}
          />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm 
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  )
}

export default Pokedex