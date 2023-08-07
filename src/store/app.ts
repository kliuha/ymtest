import { defineStore } from 'pinia'
import { MoviesList } from '@/types/Api'

export const useAppStore = defineStore('app', {
  state: () => ({
    moviesList: {} as MoviesList,
    movieShows: [] as any,
  }),
  actions: {
    async fetchMovies() {
      const data = await fetch('https://cinema-api-test.y-media.io/v1/movies', {method: 'GET'})
      this.moviesList = await data.json()
    },
    async fetchMoviesWithFilters(name: string = '', genres: number | string = '') {
      const data = await fetch(`https://cinema-api-test.y-media.io/v1/movies?&name=${name}&genres=${genres}`, {method: 'GET'})
      this.moviesList = await data.json()
    },
    async searchForSession(id: number) {
      try {
        const data = await fetch(`https://cinema-api-test.y-media.io/v1/movieShows?movie_id=${id}`, {method: 'GET'})
        this.movieShows = await data.json()
      } catch (e) {
        console.log(e)
      }
    }
  },
})
