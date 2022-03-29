import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

//const Register = () => System.import('../page/Register.vue') // carregamento sobre demanda da aplicaçao

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    menu: true
  },
  {
    path: '/register',
    name: 'Register',
    menu: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Register.vue')
  },
  {
    path: `/register/:id`,
    name: 'Altera',
    menu: false,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Register.vue')
  },
  {
    path: '*',
    component: Home,
    menu: false
  }
]

export { routes };

const router = new VueRouter({
  mode: 'history', // configuraçao para retirar o # do endereço /#/home,  /#/register. 
  //seu backend que compartilha sua aplicação em Vue deve retornar sempre index.html
  //inclusive deve retornar index.html para páginas de erro.
  base: process.env.BASE_URL,
  routes
})

export default router

// se eu utilizo o export defaul nao preciso usar { router } no main.js
// import { router } from './router'
