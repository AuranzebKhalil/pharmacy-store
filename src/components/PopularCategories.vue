<template>
  <div class="text-container">
    <h2>Popular Categories</h2>

    <div class="Categories-btn">
      <v-btn @click="supplement"> Supplements </v-btn>

      <v-btn @click="MedicinesHerbs"> MedicinesHerbs </v-btn>

      <v-btn @click="Herbs"> Herbs </v-btn>
    </div>
  </div>

  <div class="Categories-product">
    <productGridcomp :items="data" />
  </div>

  <div class="product-banner">
    <img
      src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-4.png"
      alt=""
    />

    <div>
      <h6>Newest Products</h6>

      <p>Save unto 10% extra enjoy FREE delivery with PLUS membership</p>

      <button>Show now ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";

import productGridcomp from "./productGridcomp.vue";
import Store from "../Store/index";

let data = computed(() => Store.state.Supplementcata);

let supplement = () => {
  Store.commit("catasupplement");
};

let MedicinesHerbs = () => {
  Store.commit("MedicinesHerbs");
};

let Herbs = () => {
  Store.commit("Herbs");
};
</script>

<style lang="scss">
.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  .v-btn.v-btn--density-default {
    border-radius: 34px;
    color: #ffffff;
    background-color: #184363;
    font-size: 14px;
    width: 166px;
    height: 40px;
    font-weight: 800;
  }

  .Categories-btn {
    gap: 10px;
    display: flex;
  }
}

.Categories-product {
  height: 396px;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 10px;
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
  border: 1px solid black;
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

.product-banner {
  max-width: 100%;
  width: 94%;
  margin: auto;
  height: 179px;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg")
    no-repeat center center/cover;
  border-radius: 9px;
  margin-top: 50px;
  margin-bottom: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-banner h6 {
  padding: 2px;
  width: 120px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: orange;
  text-align: center;
  color: #ffffff;
  font-size: bold;
}

.product-banner p {
  margin-top: 10px;
}

.product-banner button {
  width: 120px;
  margin-top: 15px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid black;
}

.product-banner img {
  padding-top: 170px;
}

@media only screen and (max-width: 1024px) {
  .producs {
    margin-top: -7px;
  }

  .product-banner img {
    padding-top: 0px;
  }

  .Categories-product {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 581px) {
  .product-banner img {
    padding-top: 0px;
    width: 41%;
  }
}
</style>
