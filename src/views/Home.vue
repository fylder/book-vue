<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="login">
    <Ahh msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ahh from "@/components/Ahh.vue"; // @ is an alias to /src

@Component({
  components: {
    Ahh
  }
})
export default class Home extends Vue {
  login() {
    if (this.$store.state.login) {
      this.$router.push({ path: "/about" });
    } else {
      this.$router.push({ path: "/login" });
    }
  }
}
</script>
