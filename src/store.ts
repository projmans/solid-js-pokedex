import { createResource, createSignal } from "solid-js"
import { fetchAllPokemons } from "./fetch/fetchers"

export const [currentOffset, setCurrentOffset] = createSignal("0")
