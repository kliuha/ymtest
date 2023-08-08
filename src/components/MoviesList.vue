<template>
  <div class="d-flex justify-sm-space-between justify-center flex-wrap my-6">
    <div 
      v-for="movie in appStore.moviesList?.data" 
      :key="movie.id" 
      class="ma-2 pa-2">
      <MovieCard :movie="movie" @open-shows="openShows" />
    </div>
  </div>
  <TheSpinner v-if="isLoading" :is-loading="isLoading" />
  <v-alert text="Щось пішло не так =("
    type="warning"
    variant="tonal"
    v-if="!appStore.moviesList?.data"
  ></v-alert>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import MovieCard from './MovieCard.vue'
  import TheSpinner from './TheSpinner.vue';

  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  const router = useRouter()
  const isLoading = ref(false)
  
  onMounted(async () => {
    isLoading.value = true
    await appStore.fetchMovies()
    isLoading.value = false
  })

  const openShows = (id: number) => {
    router.push({name: 'Booking', params: { movieId: id }})
  } 
</script>
