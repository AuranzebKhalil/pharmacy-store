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

import bottomfooter from "./footer.vue";
import side from "../components/StoreSideABar.vue";




</script>

<style lang="scss">
.app {
  max-width: 1448px;
  width: 100%;
  margin: auto;

}
</style>
