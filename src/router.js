import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './components/User/Profile'
import Signin from './components/User/Signin'
import Signup from './components/User/Signup'
import createArticles from './components/Articles/CreateArticles'
import Article from './components/Articles/Article'
import AuthGuard from './auth-guard'

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
      path: '/hacks',
      name: 'hacks',
      component: () => import('./views/Hacks.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/press',
      name: 'press',
      component: () => import('./views/Press.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('./views/Guides.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('./views/Jobs.vue')
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: () => import('./Guides/Bitcoin.vue')
    },
    {
      path: '/cryptos',
      name: 'cryptos',
      component: () => import('./Guides/CryptoCurrencies.vue')
    },
    {
      path: '/ethereum',
      name: 'ethereum',
      component: () => import('./Guides/Ethereum.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./Guides/HistoryMoney.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/createArticles/new',
      name: 'CreateArticles',
      component: createArticles,
      beforeEnter: AuthGuard
    },
    {
      path: '/article/:id',
      props: true,
      name: 'Article',
      component: Article
    }
  ],
  scrollBehavior () {
    // page scroll to top for all route navigations
    return { x: 0, y: 0 }
  }
})
