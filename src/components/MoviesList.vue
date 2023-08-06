<template>
  <div class="d-flex justify-space-between flex-wrap my-6">
        <div v-for="movie in appStore.moviesList?.data" :key="movie.id" class="ma-2 pa-2">
        <MovieCard :movie="movie" />
        </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import MovieCard from './MovieCard.vue'
  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  onMounted(() => {
    appStore.fetchMovies()
  })

</script>
