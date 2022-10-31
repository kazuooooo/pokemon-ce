<script setup lang="ts">
import { useFetch } from "@vueuse/core"
import { computed, toRefs } from "vue"

interface Props {
  url: string
}

type GetPokemonResponse = {
  sprites: {
    other: { "official-artwork": { front_default: string } }
  }
}

const props = defineProps<Props>()
const { url } = toRefs(props)

const { isFetching, data } = useFetch<GetPokemonResponse>(url).json()

const imageUrl = computed(
  () => data.value?.sprites.other["official-artwork"].front_default
)
</script>

<template>
  <div class="pokemon">
    <div v-if="isFetching">Loading...</div>
    <img v-else :src="imageUrl ?? ''" />
  </div>
</template>

<style scoped>
.pokemon {
  max-width: 100px;
}
</style>
