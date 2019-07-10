<template>
    <a-row type="flex" justify="space-between" align="middle">
        <a-col>
            <div class="menu_title">fylder</div>
        </a-col>
        <a-col>
            <div v-if="this.userState.username">
                <a-menu
                    theme="dark"
                    mode="horizontal"
                    :defaultSelectedKeys="['2']"
                    :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">
                        <router-link to="/">Home</router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <router-link to="/about">About</router-link>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <router-link to="/album">Album</router-link>
                    </a-menu-item>
                    <a-menu-item>
                        <a-dropdown>
                            <a class="ant-dropdown-link" href="#">
                                <a-avatar
                                    size="small"
                                    style="color: #e3f2fd; backgroundColor: #e91e62"
                                >F</a-avatar>
                                {{this.userState.username}}
                                <a-icon type="down"/>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a href="javascript:;">个人中心</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">fylder</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <span @click="logout">注销</span>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-menu-item>
                </a-menu>
            </div>
            <div v-else>
                <a-menu
                    theme="dark"
                    mode="horizontal"
                    :defaultSelectedKeys="['1']"
                    :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">
                        <router-link to="/login">login</router-link>
                    </a-menu-item>
                </a-menu>
            </div>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  userState = { username: "" };

  created() {
    if (localStorage.getItem("username")) {
      this.userState.username = localStorage.getItem("username") as string;
    } else if (this.$store.state.login) {
      this.userState.username = this.$store.state.user.username;
    }
  }

  logout() {
    this.$store.dispatch("logout").then(() => {
      localStorage.removeItem("username");
      this.$router.push({ path: "/login" });
    });
  }
}
</script>

<style>
.menu_title {
  font-size: 1.8rem;
  color: white;
}
</style>
