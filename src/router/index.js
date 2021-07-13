import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddNewCity from '../views/AddNewCity.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-new-city',
    name: 'AddNewCity',
    component: AddNewCity
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
