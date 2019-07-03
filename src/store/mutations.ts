import { MutationTree } from "vuex";
import UserState from "./state";
import * as types from "./types";

const userMutaions: MutationTree<UserState> = {
  [types.USER_LOGIN](state, userState: UserState) {
    if (userState.user.username) {
      state.user = userState.user;
      state.login = userState.login;
    }
  },
  [types.USER_LOGOUT](state, userState: UserState) {
    state.user = userState.user;
    state.login = userState.login;
  }
};

export default userMutaions;
