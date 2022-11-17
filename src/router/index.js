import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView";
import BookAppointmentView from "@/views/BookAppointmentView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/book-appointment',
    name: 'book-appointment',
    component: BookAppointmentView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
