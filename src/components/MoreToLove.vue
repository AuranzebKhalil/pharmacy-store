<template>
  <div class="topText">
    <h1>More to love</h1>
  </div>

  <div class="products-Container">
    <div class="product" v-for="item in displayedProducts" :key="item">
      <img :src="item.url" alt="" />

      <div class="product-text">
        <v-rating
          v-model="item.Rating"
          bg-color="orange-lighten-1"
          color="#fcb900"
        ></v-rating>

        <h5>{{ item.name }}</h5>

        <p>${{ item.Price }}</p>
      </div>
    </div>
  </div>

  <hr class="hr" />

  <div class="full-container flex-arround">
    <div class="cata flex-center">
      <img src="../assets/wallet.png" alt="" />
      <h4>100% Money back</h4>
    </div>

    <div class="cata flex-center">
      <img src="../assets/email.png" alt="" />
      <h4>Non-contact shipping</h4>
    </div>

    <div class="cata flex-center">
      <img src="../assets/vehicle.png" alt="" />
      <h4>Free delivery over $200</h4>
    </div>
  </div>

  <div class="bottomText flex-center">
    <h2>Best Selling Products in</h2>
  </div>


  <div class="Categories-pro">
    <productGridcomp :items="MoreToLove" />
  </div>
</template>

<script lang="ts" setup>
import productGridcomp from "./productGridcomp.vue";

import Store from "../Store/index";
import { computed } from "vue";

const displayedProducts = computed(() => {
  return Store.state.storeProduct.slice(0, 9);
});

const MoreToLove = computed(() => {
  return Store.state.storeProduct.slice(0, 5);
});

let Supplements: any = () => {};
</script>
<style lang="scss">
@import "../scss/variables";
.topText {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
}

hr {
  width: 95%;
  margin: auto;
}

.products-Container {
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  margin-bottom: 80px;

  .product {
    display: flex;
    background-color: white;
    margin-bottom: 20px;
  }

  .product-text {
    padding-left: 20px;
    padding-top: 6px;
  }

  .product img {
    width: 105px;
    height: 105px;
    border-radius: 9px;
  }

  .product h5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}

.Categories-pro {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @include left-right-10;
  margin-bottom: 20px;
  margin-top: 20px;
}

.full-container {
  width: 100%;
  margin-top: 50px;

  .cata {
    gap: 20px;
    width: 30%;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #fafafa;
  }
}

.bottomText {
  width: 100%;
  margin-top: 35px;
}

@media only screen and (max-width: 1054px) {
  .products-Container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  .products-Container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 785px) {
  .products-Container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .cata {
    flex-direction: column;
  }
}

@media only screen and (max-width: 720px) {
  .full-container {
    flex-direction: column;
  }
  .full-container .cata {
    flex-direction: row;
    width: 84%;
    margin-top: 10px;
  }
}


@media only screen and (max-width: 1024px) {
  .Categories-pro {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  .Categories-pro {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 495px) {
  .Categories-pro {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
