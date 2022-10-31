<script setup lang="ts">
import { useFetch } from "@vueuse/core"
import PokemonItem from "./parts/PokemonItem.vue"

type ListPokemonResponse = {
  count: number
  results: [{ url: string }]
}
const { isFetching, error, data } = useFetch<ListPokemonResponse>(
  "https://pokeapi.co/api/v2/pokemon?limit=10"
).json()
</script>

<template>
  <div class="pokemon-list">
    <div v-if="isFetching">Loading...</div>
    <div v-else>
      <PokemonItem v-for="{ url } in data?.results" :url="url" />
    </div>
  </div>
</template>

<style scoped>
.pokemon-list {
  display: inline-flex;
}
</style>
