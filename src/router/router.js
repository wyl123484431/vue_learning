import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    alias: "/home_page",
    name: "home",
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter(to,from,next){
      //if (from.name === 'about') alert ('这是about页来的')
      //else alert('这不是about页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue"),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:age',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true  //传入值
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/main',
    redirect: to => "/",
  },
  {
    path: '/store',
    component: () => import('../views/store.vue')
  },
  {
    path: '*',
    component: () => import('../views/error_404.vue')
  }
];
