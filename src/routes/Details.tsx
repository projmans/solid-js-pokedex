import { Component, For, Show, createResource } from "solid-js"
import { useParams } from "@solidjs/router"
import { PokemonDetails } from "../types"
import { fetchPokemonData } from "../fetch/fetchers"
import { Spinner } from "../components/Spinner/Spinner"
import { capitalizeFirstLetter } from "../utils/utils"

import styles from "../App.module.css"

export const Details: Component = () => {
  const pokemonName = useParams().pokemon

  const [pokemon] = createResource<PokemonDetails>(() =>
    fetchPokemonData(pokemonName)
  )

  return (
    <div class={styles.detailContainer}>
      <Show when={!pokemon.loading} fallback={<Spinner />}>
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-evenly",
            "align-items": "center",
          }}
        >
          <div>
            <h2>
              {capitalizeFirstLetter(pokemon()!.name)} - #{pokemon()!.id}
            </h2>
            <div>
              <div style={styles.imageContainer}>
                <img
                  src={
                    pokemon()!.sprites.other["official-artwork"].front_default
                  }
                  alt={pokemon()!.name}
                />
              </div>
              <h2>Types:</h2>
              <For each={pokemon()!.types}>
                {type => <h3>{capitalizeFirstLetter(type.type.name)}</h3>}
              </For>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "border-left": "4px solid black",
              "padding-left": "15px",
              "padding-right": "15px",
            }}
          >
            <div>
              <h2>Stats:</h2>
              <For each={pokemon()!.stats}>
                {stat => (
                  <h3>
                    {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                  </h3>
                )}
              </For>
            </div>
            <div>
              <h2>Height:</h2>
              <h3>{pokemon()!.height}</h3>
            </div>
            <div>
              <h2>Weight:</h2>
              <h3>{pokemon()!.weight}</h3>
            </div>
            <div>
              <h2>Abilities: </h2>
              <For each={pokemon()!.abilities}>
                {ability => (
                  <h3>{capitalizeFirstLetter(ability.ability.name)}</h3>
                )}
              </For>
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}
