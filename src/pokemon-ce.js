import { defineCustomElement } from "vue"
import PokemonList from "./components/PokemonList/PokemonList.ce.vue"

export const definePokemonList = () => {
  customElements.define("pokemon-list", defineCustomElement(PokemonList))
}
