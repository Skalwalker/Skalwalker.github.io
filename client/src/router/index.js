import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/screens/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: Home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Home
    },
    {
      path: '/portifolio',
      name: 'Portifolio',
      component: Home
    },
    {
        path: '/certificates',
        name: 'Certificates',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Home
    }
  ]
})
