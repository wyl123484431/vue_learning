<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
    </div>
      <transition-group :name="routerTransition"> //组件过度
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
      </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
    watch: {
      '$route' (to) {
        console.log(to.query.transitionName)
        console.log(1111)
        to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
      }
    }
}
</script>

<style lang="stylus">
.router-enter{
    opacity: 0; //透明度
}
.router-enter-active{
    transition: opacity 1s ease;
}
.router-enter-to{
    opacity: 1;
}
.router-leave{
    opacity: 1;
}
.router-leave-active{
    transition: opacity 1s ease;
}
.router-leave-to{
    opacity: 0;
}
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
