import { getAppName } from '../api/app.js'

const actions = {
  /*updateAppName ({ commit }){
    getAppName().then(res => {
      const { info: { appName } } = res
      commit('SET_APP_NAME',appName)
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }*/

  async updateAppName ({ commit }) {
    try{ const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME',appName)
    } catch(err) {
      console.log(err)
    }
  }
}
export default actions
