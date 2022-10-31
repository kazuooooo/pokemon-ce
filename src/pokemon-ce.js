import { defineCustomElement } from "vue"
import PokemonList from "./components/PokemonList/PokemonList.ce.vue"

export const usePokemonList = () => {
  customElements.define("pokemon-list", defineCustomElement(PokemonList))
}
