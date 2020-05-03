
export default {
  routes: {
    '/': {
      component: () => import('./pages/Home.radi'),
    }
  },
  beforeEach(to, from, next) {
    next()
    // if (to === '/restricted') {
    //   next(false)
    // } else {
    //   next()
    // }
  },
}
