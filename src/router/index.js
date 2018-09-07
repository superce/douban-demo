import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HotFilm from '@/components/HotFilm'
import movieDetail from '@/components/movieDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hot-film',
      name: 'HotFilm',
      component: HotFilm
    },
    {
          path: '/movie-detail',
          name: 'movieDetail',
          component: movieDetail
    }
  ]
})
