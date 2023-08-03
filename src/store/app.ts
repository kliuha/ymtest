// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    filmList: {} as any
  }),
  actions: {
    async fetchFilms() {
      const data = await fetch('https://cinema-api-test.y-media.io/v1/movies', {method: 'GET'})
      this.filmList = await data.json()
    },
  },
})
