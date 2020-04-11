// eslint-disable-next-line no-unused-vars
import axios from "axios";

const state = {
  loginData: {}
};

const getters = {};

const actions = {
  async loginUser({ state }) {
    console.log(state.loginData);
  }
};

const mutations = {
  storeLoginData: (state, data) => {
    state.loginData[data.npx] = data.value;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
