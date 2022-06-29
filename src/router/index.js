import Vue from 'vue'
import VueRouter from 'vue-router'
const PessoaApp = () => import('../components/PessoaApp.vue')
const PessoaDetalhe = () => import('../components/PessoaDetalhe.vue')
const Mapa = () => import('../components/Mapa.vue')
const HomeView = () => import('../views/HomeView.vue')
const BailesApp = () => import('../components/BailesApp.vue')
const Casa = () => import('../components/Casa.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
  {
    path: '/mapa',
    name: 'mapa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mapa
  },
  {
    path: '/pessoas',
    name: 'pessoas',
    component: PessoaApp,
    props: true,
    // children: [{
    //   path: ':id',
    //   component: PessoaDetalhe,
    // }]
  },
  {
    path: '/bailes',
    name: 'bailes',
    component: BailesApp,
    props: true,
    // children: [{
    //   path: ':id',
    //   component: PessoaDetalhe,
    // }]
  },
  {
    path: '/casa',
    name: 'casa',
    component: Casa,
    props: true,
    // children: [{
    //   path: ':id',
    //   component: PessoaDetalhe,
    // }]
  },
  {
    path: '/pessoas/:id',
    name: 'pessoaDetalhe',
    component: PessoaDetalhe,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
