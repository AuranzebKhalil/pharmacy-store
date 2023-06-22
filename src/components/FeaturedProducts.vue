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
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-text h2 {
  color: #184363;
  font-size: 24px;
  font-weight: 700;
  text-transform: none;
}

.products {
  width: 218px;
  height: 428px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-contant {
  width: 220px;
  height: 160px;
}

.products img {
  width: 220px;
  height: 220px;
  background: #f2f2f2;
  border-radius: 9px;
}

.cart-img {
  width: 18px;
  height: 18px;
}

.product-contant p {
  font-size: 14px;
  font-weight: 300;
  color: rgb(78, 78, 230);
  margin-top: 10px;
  margin-bottom: 10px;
}

.product-contant button {
  // padding: 10px 10px 10px 10px;
  border-radius: 20px;

  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.product-contant img {
  width: 20px;
  height: 20px;
  border: none;
  gap: 20px;
}

.product-contant h3 {
  font-size: 15px;
  color: #262626;
  font-weight: 1000;
  padding-top: 5px;
}

.product-contant h3 {
  font-size: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.product-contant h5 {
  font-size: 15px;
  padding-top: 3px;
}

.v-rating {
  display: flex;
  white-space: nowrap;
  height: 26px;
  display: flex;
  align-items: center;
}

.v-rating__wrapper {
  width: 23px;
}

.rating {
  margin-top: 0px;
  margin-bottom: 0px;
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
