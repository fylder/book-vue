import { ActionTree, Commit } from "vuex";
import UserModel from "./models/userModel";
import UserState from "./state";
import "./types";
import { USER_LOGIN, USER_LOGOUT } from "./types";

const userActions: ActionTree<UserState, any> = {
  login(context: { commit: Commit }, user: UserModel) {
    if (user.username) {
      context.commit(USER_LOGIN, { login: true, user });
    }
  },
  logout(context: { commit: Commit }) {
    const user = new UserModel();
    context.commit(USER_LOGOUT, { login: false, user });
  }
};

export default userActions;
