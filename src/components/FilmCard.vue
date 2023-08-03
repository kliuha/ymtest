<template>
    <v-card
      max-width="250"
    >
      <v-img
        :src="film.image"
        cover
      ></v-img>
  
      <v-card-title>
        {{ film.name }}
      </v-card-title>
  
      <v-card-subtitle>
        <span v-html="film.description" class=""></span>
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Book
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            <span v-html="film.additional"></span>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    defineProps<{
        film: any
    }>()
    
    const show = ref(false)
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