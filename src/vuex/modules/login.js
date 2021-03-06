import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:null,
  userId:null
}

const mutations = {
  [types.CHANGE_TOKEN] (state,res) {
    state.token = res
  },
  [types.CHANGE_USER] (state,res) {
    state.userId = res
  }
}


export default {
  state,
  mutations
}
