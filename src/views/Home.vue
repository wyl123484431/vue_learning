<template>
  <div class="home">
      <b>{{ food }}</b>
      <button @click="handleClick('back')">返回上一页</button>
      <button @click="handleClick('push')">跳转到parent</button>
      <button @click="handleClick('replace')">替换</button>
      <button @click="handleClick('replace')">请求数据</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from , next) {
    console.log(to.name)
    // this 是获取不到当前组件实例
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    //const leave = confirm('你确定要离开吗')
    //if (leave) next()
    //else next(false)
    next()
  },
  methods: {
    handleClick (type) {
      if (type == 'back') {
        this.$router.back()
      }
      else if (type == 'push') {
        const age = 'losin'
        this.$router.push({
          path: `/argu/${age}`
          /*name: 'argu',
          params: {
            age: 10,
          }*/
          /*query: {
            age: 'lai'
          }*/
        })
      }
      else if (type === 'replace') {
         this.$router.replace({
           name: 'parent'
         })
      }
    }
  }
}
</script>
