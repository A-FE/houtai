import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ruleForm:{}
}

localStorage.getItem('ruleForm')?
    state.selectForm = localStorage.getItem('ruleForm').split(','): false

const mutations = {
  setRuleForm(state, payload) {
    Object.assign(state.ruleForm,payload);
  }
}

export default  new Vuex.Store({
  state,
  mutations
})
