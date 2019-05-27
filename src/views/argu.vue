<template>
    <div>
        {{ age }}
    </div>
</template>

<script>
export default {
    props: {
      age: {
        type: String,
        default: '111'  //默认值
      }
    },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  },
}
</script>


