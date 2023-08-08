import { defineStore } from 'pinia'
import { MoviesList, MovieShows, BookingData, SessionSeats, BookingResponse } from '@/types/Api'

export const useAppStore = defineStore('app', {
  state: () => ({
    moviesList: {} as MoviesList,
    movieShows: {} as MovieShows,
    sessionPlaces: {} as SessionSeats,
    bookResult: {} as BookingResponse
  }),
  actions: {
    async fetchMovies() {
      try {
        const data = await fetch('https://cinema-api-test.y-media.io/v1/movies', {method: 'GET'})
      this.moviesList = await data.json()
    } catch (e) {
      console.log(e)
    }
    },
    async fetchMoviesWithFilters(name: string = '', genres: number | string = '') {
     try {
      const data = await fetch(`https://cinema-api-test.y-media.io/v1/movies?&name=${name}&genres=${genres}`, {method: 'GET'})
      this.moviesList = await data.json()
    } catch (e) {
      console.log(e)
    }
    },
    async searchForSession(id: number) {
      try {
        const data = await fetch(`https://cinema-api-test.y-media.io/v1/movieShows?movie_id=${id}`, {method: 'GET'})
        this.movieShows = await data.json()
      } catch (e) {
        console.log(e)
      }
    },
    async checkFreePlaces(id: number, daytime: string, showdate: string) {
      try {
        const data = await fetch(`https://cinema-api-test.y-media.io/v1/showPlaces?movie_id=${id}&daytime=${daytime}&showdate=${showdate}`, {method: 'GET'})
        this.sessionPlaces = await data.json()
      } catch (e) {
        console.log(e)
      }
    },
    async bookSessionPlace(obj: BookingData) {
      try {
        const data = await fetch(`https://cinema-api-test.y-media.io/v1/bookPlace`, {method: 'POST', body: JSON.stringify(obj)})
        this.bookResult = await data.json()  
      } catch (e) {
        console.log(e)
      }
    },
  },
})
