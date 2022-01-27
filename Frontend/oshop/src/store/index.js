import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    ALL_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://127.0.0.1:8000/").then((response) => {
        console.log(response.data);
        commit("ALL_PRODUCTS", response.data);
      });
    },
  },
  modules: {},
});
