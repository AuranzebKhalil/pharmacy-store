<template>
  <div class="app">
    <!-- <div class="pre-loader mx-auto">
      <img src="https://www.acbar.org/Website/Loader/loader3.gif" alt="" />
    </div> -->

    <side />
    <bottomfooter />
  </div>
</template>

<script lang="ts" setup>
import navbar from "./navbar.vue";
import bottomfooter from "./footer.vue";
import side from "../components/StoreSideABar.vue";

import store from "../Store/index";
import { onMounted } from "vue";

onMounted(() => {
  // store.commit("catasupplement");
});
</script>

<style lang="scss">
.app {
  max-width: 1350px;
  width: 100%;
  margin: auto;
  // background-color: aqua;
}
</style>
