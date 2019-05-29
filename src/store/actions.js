import { getAppName } from '../api/app.js'

const actions = {
  updategetAppName ({ commit }){
    getAppName().then(res)
  }
}
export default actions
