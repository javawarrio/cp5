import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Register from './views/Register.vue'
import MyPage from './views/MyPage.vue'
import Login from './views/Login.vue'
import Photo from './views/Photo.vue'
import Menu from './views/Menu.vue'
import Donation from './views/Donation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/donation',
      name: 'donation',
      component: Donation
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
  ]
})
