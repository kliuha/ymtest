<template>
  <v-card
    max-width="250"
  >
    <v-img
      :src="movie.image"
      cover
    ></v-img>

    <v-card-title>
      {{ movie.name }}
    </v-card-title>

    <v-card-subtitle>
      <span v-html="movie.description" class=""></span>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="$emit('openShows', movie.id)"
      >
        Book
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="showInfo ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="showInfo = !showInfo"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showInfo">
        <v-divider></v-divider>

        <v-card-text>
          <span v-html="movie.additional"></span>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Movie } from '@/types/Api';

  defineProps<{
    movie: Movie
  }>()
  defineEmits<{
    (e: 'openShows', id: number): void
  }>()

  const showInfo = ref(false)
</script>

<style lang="scss" scoped>
.v-card-subtitle{
    white-space: normal;
    overflow-y:visible;
    max-height: 100px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>