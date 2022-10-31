import { defineCustomElement } from "vue"
import PokemonList from "./components/PokemonList/PokemonList.ce.vue"
customElements.define("pokemon-list", defineCustomElement(PokemonList))
