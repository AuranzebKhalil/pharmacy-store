<template>
  <div class="app">
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
  store.commit("catasupplement");
});
</script>

<style lang="scss">
.app {
  max-width: 1250px;
  width: 100%;
  margin: auto;
}
</style>
