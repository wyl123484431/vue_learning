<template>
    <div>
        <a-input @input="handleInput" />
        <!--<a-input :value="inputValue" @input="handleInput" />-->
        <!--<a-input v-model="inputValue"/>-->
        <p>{{inputValue}} -> lastLetter is {{ inputValueLastLetter }}</p>
        <p>{{inputValue}} -> firstLetter is {{ firstLetter }}</p>
        <p>appNameWithVersion: {{ appNameWithVersion }}</p>
       <!-- <a-show :content="inputValue"/>-->
        <p>appName: {{ appName }}</p>
        <p>userName: {{ userName }}</p>
    </div>
</template>
<script>
import AInput from '../components/AInput'
import AShow from '../components/AShow'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    //展开操作符
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    /*...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),*/
    ...mapGetters('user',[
      'firstLetter'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    /*appNameWithVersion (state) {
      return this.$store.getters.appNameWithVersion
    }*/
    /*appName () {
      return this.$store.state.appName
    },
    userName () {
      return this.$store.state.user.userName
    }*/
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
