import { defineStore } from 'pinia'
import { MoviesList } from '@/types/Api'

export const useAppStore = defineStore('app', {
  state: () => ({
    moviesList: {} as MoviesList,
  }),
  actions: {
    async fetchMovies() {
      const data = await fetch('https://cinema-api-test.y-media.io/v1/movies', {method: 'GET'})
      this.moviesList = await data.json()
    },
  },
})
