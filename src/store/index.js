import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    citiesWithRecords: []
  },
  mutations: {
    setAllCitiesWithRecords(state, payload) {
      state.citiesWithRecords = payload
    },
    deleteCity(state, payload) {
      const cityId = payload
      const cities = state.citiesWithRecords
      const city = cities.find(city => city._id === cityId)
      const result = cities.filter(el => {
        return el != city
      })
      state.citiesWithRecords = result
    }
  },
  actions: {
   async setAllCitiesWithRecords(context) {
      try {
        const res = await axios.get('http://localhost:3000/api/get-all-cities')
        context.commit('setAllCitiesWithRecords', res.data.citiesWithRecords)
      } catch (error) {
        console.log(error)
      }
    },
   async deleteCity(context, payload) {
      const cityId = payload
      try {
        const res = await axios.delete(`http://localhost:3000/api/delete-city/${cityId}`)
        console.log(res.data.message)
        const deletedCityId = res.data.deletedCityId
        context.commit('deleteCity', deletedCityId)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    citiesWithRecords(state) {
      return state.citiesWithRecords
    }
  }
})
