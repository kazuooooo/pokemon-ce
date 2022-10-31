import { defineCustomElement } from "vue"
import PokemonList from "./components/PokemonList/PokemonList.vue"
customElements.define("pokemon-list", defineCustomElement(PokemonList))
