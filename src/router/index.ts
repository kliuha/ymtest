import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/TheDefault.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/TheHome.vue'),
      },
      {
        path: 'booking/:movieId',
        name: 'Booking',
        component: () => import('@/views/BookingList.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
