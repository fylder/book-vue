import { Route } from "vue-router";
import router from "../router";
import store from "../store/store";
import Vue from "vue";

const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to: Route, _: Route, next: any) => {
  console.log("ahh  =======> beforeEach: " + store.state.login);
  if (store.state.login || window.localStorage.getItem("username")) {
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next();
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
    }
  }
});
