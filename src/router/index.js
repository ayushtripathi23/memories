import { createRouter, createWebHistory } from '@ionic/vue-router';

import MemoriesPage from '../pages/MemoriesPage.vue'
import MemoriesDetails from '../pages/MemoriesDetails.vue'
import AddMemoryPage from '../pages/AddMemoryPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: MemoriesDetails
  },
  {
    path: '/memories/add',
    component: AddMemoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
