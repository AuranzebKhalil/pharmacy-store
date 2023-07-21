<template>
  <div class="featured-text">
    <h2>Featured Products</h2>
  </div>

  <div class="Categories-product">
    <productGridcomp :items="FeaturedProducts" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import productGridcomp from "./productGridcomp.vue";

import store from "../Store/index";
import Store from "../Store/index";

import { computed, onMounted } from "vue";

const FeaturedProducts = computed(() => {
  return Store.state.firebaseproducts.slice(0, 10);
});
</script>

<style lang="scss">

@import "../scss/variables";

.Categories-product {
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 26px;
  height: auto;
}

.featured-text {
  width: 100%;
  height: 30px;
 @include flex-center
}

.featured-text h2 {
  color: #184363;
  font-size: 24px;
  font-weight: 700;
  text-transform: none;
}



@media only screen and (max-width: 1024px) {
  .Categories-product {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  .Categories-product {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 495px) {
  .Categories-product {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
