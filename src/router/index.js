import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import { setTitle } from "../lib/util.js"

Vue.use(Router);

const router = new Router({
  routes
})

const HAS_LOGINED = true

router.beforeEach((to,from,next) => {   //全局前置守卫，   to from 路由对象  要跳转的to  要离开的from

    to.meta && setTitle(to.meta.title)

    if (to.name !== 'login') {
      if(HAS_LOGINED) next()
      else next({ name: 'login'})
    }else{
      if (HAS_LOGINED) next ({name: 'home'})
      else next()
    }
  }
)

//router.beforeResolve()          //导航被确认之前

router.afterEach((to,from) => {

  }
)

export default router
