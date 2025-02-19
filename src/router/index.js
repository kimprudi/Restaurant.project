import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home_page.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'
import RestrauntList from '@/components/RestrauntList.vue'
import Menu from '@/components/Menu.vue'
import About from '@/components/About.vue'
import Order from '@/components/Order.vue'




// route array of objects : path, component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/Booking',
    component: Booking
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Feedback',
    component: Feedback
  },
  {
    path:'/RestrauntList',
    component: RestrauntList
  },
  { path:'/Menu',
    component: Menu

  },
  {
    path:'/About',
    component: About
  },
  {
    path:'/Order',
    component: Order
  }
  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router