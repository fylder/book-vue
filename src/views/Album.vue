<template>
    <div class="album">
        <h1>This is an album page</h1>
        <a-row type="flex">
            <div v-for="n in 6" :key="n">
                <a-col class="album-card" :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
                    <a-card hoverable>
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            slot="cover"
                        >
                        <a-card-meta title="Europe Street beat">
                            <template slot="description">www.instagram.com</template>
                        </a-card-meta>
                    </a-card>
                </a-col>
            </div>
        </a-row>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Album extends Vue {}
</script>
<style>
.album-card {
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
}
</style>