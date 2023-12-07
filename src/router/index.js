import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import Ulogin from '../components/Ulogin.vue'
import Home from '../components/Home.vue'
import Upage from '../components/Upage.vue'
import Uaccount from '../components/Uaccount.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  },
  {
    path: '/userlogin',
    name: 'Ulogin',
    component: Ulogin
  },
  {
    path: '/upage',
    name: 'Upage',
    component: Upage
  },
  {
    path: '/uaccount',
    name: 'Uaccount',
    component: Uaccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
