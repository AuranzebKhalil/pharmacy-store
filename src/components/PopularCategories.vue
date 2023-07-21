<template>
  <div class="text-container flex-center">
    <h2>Popular Categories</h2>

    <div class="Categories-btn">
      <v-btn :class="{ active: isActive }" @click="supplement">
        Supplements sVitamins
      </v-btn>

      <v-btn @click="MedicinesHerbs"> Medicines </v-btn>

      <v-btn @click="Herbs"> Herbs </v-btn>
    </div>
  </div>

  <div class="Categories-product">
    <productGridcomp :items="data" />
  </div>

  <div class="product-banner flex-center">
    <img
      src="https://enovathemes.com/propharm/wp-content/uploads/banner-image-4.png"
      alt=""
    />

    <div>
      <h6 class="banner-h6">Newest Products</h6>

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

let isActive = ref(false);

let supplement = () => {
  Store.commit("catasupplement");
  isActive.value = !isActive.value;
};

let catadata = Store.dispatch("supplements");

let MedicinesHerbs = () => {
  Store.commit("MedicinesHerbss");
};

let Herbs = () => {
  Store.commit("Herbs");
};
</script>

<style lang="scss">
@import "../scss/variables";

.text-container {
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  .btn__underlay {
    color: #184363;
  }

  .v-btn.v-btn--density-default {
    border-radius: 34px;
    color: #ffffff;

    color: #184363;
    background-color: #ffffff;
    font-size: 14px;

    height: 40px;
    font-weight: 800;
  }

  .Categories-btn {
    gap: 10px;
    display: flex;
  }

  .v-tab--selected .v-tab__slider {
    display: none;
  }
}

.Categories-product {
  @include product;
}

.product-ban {
  max-width: 100%;
  width: 94%;
  margin: auto;
  height: 179px;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg")
    no-repeat center center/cover;
  border-radius: 9px;
  margin-top: 50px;
  margin-bottom: 82px;
}

.v-rating {
 
  @include rating

}

.v-rating__wrapper {
  width: 23px;
}

.rating {
  margin-top: 0px;
  margin-bottom: 0px;
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

@media only screen and (max-width: 720px) {
  .text-container .Categories-btn {
   @include flex-all-center-col;
    gap: 12px;
    width: 85%;
  }

  .text-container .v-btn.v-btn--density-default {
    border-radius: 34px;
    color: #ffffff;
    background-color: #184363;
    font-size: 14px;
    width: 100%;
    height: 40px;
    font-weight: 800;
  }
}

@media only screen and (max-width: 510px) {
  .Categories-product {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
