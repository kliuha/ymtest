<template>
  <div class="d-flex justify-space-between flex-wrap my-6">
        <div v-for="film in appStore.filmList?.data" :key="film.id" class="ma-2 pa-2">
        <FilmCard :film="film" />
        </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import FilmCard from './FilmCard.vue'
  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  onMounted(() => {
    appStore.fetchFilms()
  })

</script>
