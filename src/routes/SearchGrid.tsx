import { Component, For, createResource } from "solid-js"
import { currentOffset } from "../store"
import { handleOffset } from "../utils/utils"
import styles from "../App.module.css"
import { GridButton } from "../components/GridButton/GridButton"
import { useNavigate } from "@solidjs/router"
import { fetchAllPokemons } from "../fetch/fetchers"

export const [pokemons, { mutate, refetch }] = createResource(() =>
  fetchAllPokemons(currentOffset())
)

export const SearchGrid: Component = () => {
  const navigate = useNavigate()
  return (
    <>
      <div class={styles.buttonContainer}>
        <div
          class={styles.changeButton}
          onClick={() => handleOffset("decrease")}
        >
          {"<"}
        </div>
        <h2>
          {Number(currentOffset()) + 1} - {Number(currentOffset()) + 150}
        </h2>
        <div
          class={styles.changeButton}
          onClick={() => handleOffset("increase")}
        >
          {">"}
        </div>
      </div>
      <div class={styles.gridContainer}>
        <For each={pokemons()}>
          {pokemon => (
            <GridButton
              name={pokemon.name}
              url={pokemon.url}
              onClick={() => navigate(`/pokemon/${pokemon.name}`)}
            />
          )}
        </For>
      </div>
      <div class={styles.buttonContainer}>
        <div
          class={styles.changeButton}
          onClick={() => handleOffset("decrease")}
        >
          {"<"}
        </div>
        <div
          class={styles.changeButton}
          onClick={() => handleOffset("increase")}
        >
          {">"}
        </div>
      </div>
    </>
  )
}
