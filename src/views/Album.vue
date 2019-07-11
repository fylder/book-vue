<template>
    <div>
        <h1>This is an album page</h1>
        <a-row type="flex" align="top">
            <a-col v-for="n in 6" :key="n" :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <div class="album-lay">
                    <a-card class="album-card" hoverable>
                        <img
                            class="album-img"
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            slot="cover"
                        >
                        <a-card-meta title="Europe Street beat">
                            <template slot="description">www.instagram.com</template>
                        </a-card-meta>
                    </a-card>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Album extends Vue {}
</script>
<style>
.album-lay {
  padding: 0.2rem 0.4rem;
}
.album-card {
  width: 100%;
}
.album-img {
  width: 100%;
  height: 220px;
}
</style>