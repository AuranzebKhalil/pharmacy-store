<template>
  <div class="producs">
    <v-card>
      <v-tabs bg-color="deep-purple-darken-4" center-active>
        <v-tab>
          <img
            @click="render('Baby')"
            class="product-img"
            src="../assets/baby-socks.png"
            alt=""
          />
          Baby
        </v-tab>
        <v-tab>
          <img
            @click="render('Beauty')"
            class="product-img"
            src="../assets/skincare.png"
            alt=""
          />
          Beauty</v-tab
        >
        <v-tab>
          <img
            @click="render('Grocery')"
            class="product-img"
            src="../assets/food.png"
            alt=""
          />
          Grocery
        </v-tab>
        <v-tab>
          <img
            @click="render('Health Topics')"
            class="product-img"
            src="../assets/healthcare.png"
            alt=""
          />
          Health Topics
        </v-tab>

        <v-tab>
          <img
            @click="render('Herbs')"
            class="product-img"
            src="../assets/mortar.png"
            alt=""
          />
          Herbs
        </v-tab>

        <v-tab>
          <img
            @click="render('Meadicines')"
            class="product-img"
            src="../assets/pills.png"
            alt=""
          />
          Meadicines
        </v-tab>

        <v-tab>
          <img
            @click="render(' Personal care')"
            class="product-img"
            src="../assets/personal-hygiene.png"
            alt=""
          />
          Personal care
        </v-tab>

        <v-tab>
          <img
            @click="render('Pets')"
            class="product-img"
            src="../assets/pets-allowed.png"
            alt=""
          />
          Pets
        </v-tab>

        <v-tab>
          <img
            @click="render('Pets')"
            class="product-img"
            src="../assets/proteins.png"
            alt=""
          />Protein
        </v-tab>

        <v-tab>
          <img class="product-img" src="../assets/protein-powder.png" alt="" />Spots
          Nutrition</v-tab
        >
        <v-tab>
          <img
            class="product-img"
            src="../assets/supplement.png"
            alt=""
          />supplements</v-tab
        >
        <v-tab>
          <img class="product-img" src="../assets/vitamin.png" alt="" />
          vitamin</v-tab
        >
      </v-tabs>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import store from "../Store";
import router from "../router";

let render = (val: any) => {
  router.push("./store");
  store.commit("HomeCategory", val);
};
</script>

<style lang="scss">
.producs {
  width: 100%;
  height: 150px;
  margin-top: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 25px;
  .v-slide-group__next,
  .v-slide-group__prev {
    color: black;
  }

  .v-slide-group__content {
    gap: 52px;
  }

  .v-tabs--density-default {
    --v-tabs-height: 91px;
  }
  .product-img {
    width: 48px;
  }

  .v-btn__content {
    color: black;
  }

  .bg-deep-purple-darken-4 {
    background-color: white !important;
    margin-bottom: 23px;
  }
}

.producs .v-btn__content {
  display: flex;
  align-items: center;
}

a {
  /* background-color: transparent; */
  display: flex;
  align-items: center;
  gap: 6px;
}

.producs .bg-deep-purple-darken-4 {
  background-color: white;
  border: none;
  margin-bottom: 0px;
}

@media only screen and (max-width: 1024px) {
  .producs {
    width: 100%;
    height: 150px;
    // margin-top: 25px;
    max-width: 100%;
    width: 95%;
    margin: auto;
    border: none;
  }
}
</style>
