const state = {
  userName: 'wang'
}
const mutations = {

}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const action = {
  //
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  action
}
