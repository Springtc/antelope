import Util from '../../util/common'
import * as types from '../types'
const state = {
  wspServer:null
}

const mutations = {
  [types.CHANGE_WSPSERVER] (state,res) {
    state.wspServer = res
  }
}


export default {
  state,
  mutations
}
