<template>
  <div>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <y-menu></y-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px'}">
        <div class="layout" :style="{minHeight: this.styles.height}">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import YMenu from "@/components/YMenu.vue";

@Component({
  components: {
    YMenu
  }
})
export default class Layout extends Vue {
  styles = {
    height: ""
  };
  mounted() {
    this.styles.height = window.innerHeight - 64 - 69 + "px";
    window.onresize = () => {
      this.styles.height = window.innerHeight - 64 - 69 + "px";
    };
  }
}
</script>

<style scoped>
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

.layout {
  padding: 24px;
}
</style>
