<template>
    <div
        class="d-md-flex flex-md-wrap d-block align-md-center"
    >
        <v-text-field
            class="ma-2 pa-2"
            prepend-inner-icon="mdi-magnify"
            single-line
            label="Введіть назву фільма"
            v-model="searchText"
            clearable
            @click:clear="onClear"
        ></v-text-field>
        <v-select
            class="ma-2 pa-2"
            label="Виберіть жанр"
            :items="Object.values(GenresText)"
            v-model="searchGenres"
            clearable
        ></v-select>
        <v-btn 
        class="mb-5 mx-md-2 mx-4"
        variant="tonal"
        prepend-icon="mdi-magnify"
        size="x-large"
        rounded="xs"
        @click="startSearch"
        >Пошук</v-btn>
        <TheSpinner v-if="isLoading" :is-loading="isLoading" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue'

import TheSpinner from './TheSpinner.vue';

import { useAppStore } from '@/store/app'
import { GenresId, GenresText } from '@/enums/Genres'

const appStore = useAppStore()

const searchText = ref('')
const searchGenres: Ref<GenresText | null | undefined> = ref(null)
const isLoading = ref(false)

const startSearch = async () => {
    if (!searchGenres.value && !searchText.value && appStore.moviesList.data[0]) return
    isLoading.value = true
    await appStore.fetchMoviesWithFilters(searchText.value, GenresId[searchGenres.value as keyof typeof GenresId])
    isLoading.value = false
}

const onClear = () => {
    searchText.value = ''
}
</script>