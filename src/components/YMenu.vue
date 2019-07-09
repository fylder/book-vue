<template>
    <a-row>
        <a-col :span="8" :offset="16">
            <div v-if="this.$store.state.login">
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
                    <a-menu-item key="4">
                        <span
                            type="primary"
                            v-on:click="logout"
                        >{{this.$store.state.user.username}}:Exit</span>
                    </a-menu-item>
                </a-menu>
            </div>
            <div v-else-if="this.userState.username">
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
                    <a-menu-item key="4" @click="logout">
                        <span type="primary">{{this.userState.username}}:Exit</span>
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
  userState = { username: localStorage.getItem("username") };

  logout() {
    this.$store.dispatch("logout").then(() => {
      localStorage.removeItem("username");
      this.$router.push({ path: "/login" });
    });
  }
}
</script>