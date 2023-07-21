import { createStore } from 'vuex'



import state from './state'
import mutations from './mutations'
import getters from './getter'
import actions from './action'

 

export default  createStore({


  state,
  getters,
  actions,
  mutations,
  


})