<template>
  <div id="app">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-row>
          <a-col :span="8" :offset="16">
            <div v-if="this.$store.state.login">
              <a-menu
                theme="dark"
                mode="horizontal"
                :defaultSelectedKeys="['1']"
                :style="{ lineHeight: '64px' }"
              >
                <a-menu-item key="1">
                  <router-link to="/">Home</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                  <router-link to="/about">About</router-link>
                </a-menu-item>
                <a-menu-item key="3">
                  <router-link to="/layout">Layout</router-link>
                </a-menu-item>
                <a-menu-item key="4">
                  <a-row>
                    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="12">
                      <span>{{this.$store.state.user.username}}</span>
                    </a-col>
                    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="12">
                      <a-button type="primary" v-on:click="logout">Exit</a-button>
                    </a-col>
                  </a-row>
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
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <a-breadcrumb :style="{ margin: '16px 0' }"></a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '480px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  logout() {
    console.log("exit");
    this.$store.dispatch("logout").then(() => {
      this.$router.push({ path: "/login" });
    });
  }

  created() {
    console.log("ahh", this.$store.state.login);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
