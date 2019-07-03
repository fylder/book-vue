import Vue from "vue";
import Vuex from "vuex";
import userActions from "./actions";
import userMutaions from "./mutations";
import UserState from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: UserState,
  mutations: userMutaions,
  actions: userActions
});
