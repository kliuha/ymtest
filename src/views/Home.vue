<template>
  <v-text-field
    prepend-icon="mdi-magnify"
    single-line
  ></v-text-field>
  <MoviesList />
</template>

<script lang="ts" setup>
  import MoviesList from '@/components/MoviesList.vue'
</script>
