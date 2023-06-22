<template>
  <div class="producs">
    <v-card class="v-card">
      <v-tabs bg-color="deep-purple-darken-4" show-btn>
        <v-tab>
          <img
            @click="render('Baby')"
            class="product-img"
            src="../assets/baby-socks.png"
            alt=""
          />
          <p class="cata-text">Baby</p>
        </v-tab>
        <v-tab>
          <img
            @click="render('Beauty')"
            class="product-img"
            src="../assets/skincare.png"
            alt=""
          />
          <p class="cata-text">Beauty</p>
        </v-tab>
        <v-tab>
          <img
            @click="render('Grocery')"
            class="product-img"
            src="../assets/food.png"
            alt=""
          />
          <p class="cata-text">Grocery</p>
        </v-tab>
        <v-tab>
          <img
            @click="render('Health Topics')"
            class="product-img"
            src="../assets/healthcare.png"
            alt=""
          />
          <p class="cata-text">Health Topics</p>
        </v-tab>

        <v-tab>
          <img
            @click="render('Herbs')"
            class="product-img"
            src="../assets/mortar.png"
            alt=""
          />
          <p class="cata-text">Herbs</p>
        </v-tab>

        <v-tab>
          <img
            @click="render('Medicines')"
            class="product-img"
            src="../assets/pills.png"
            alt=""
          />
          <p class="cata-text">Medicines</p>
        </v-tab>

        <v-tab>
          <img
            @click="render('Personal Care')"
            class="product-img"
            src="../assets/personal-hygiene.png"
            alt=""
          />
          <p class="cata-text">Personal care</p>
        </v-tab>

        <v-tab>
          <img
            @click="render('Pets')"
            class="product-img"
            src="../assets/pets-allowed.png"
            alt=""
          />
          <p class="cata-text">Pets</p>
        </v-tab>

        <v-tab>
          <img
            @click="render('Pets')"
            class="product-img"
            src="../assets/proteins.png"
            alt=""
          />
          <p class="cata-text">Protein</p>
        </v-tab>

        <v-tab>
          <img class="product-img" src="../assets/protein-powder.png" alt="" />Spots
          <p class="cata-text">Nutrition</p>
        </v-tab>
        <v-tab>
          <img class="product-img" src="../assets/supplement.png" alt="" />
          <p class="cata-text">supplements</p></v-tab
        >
        <v-tab>
          <img class="product-img" src="../assets/vitamin.png" alt="" />
          <p class="cata-text">vitamin</p>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import store from "../Store";
import router from "../router";
let render = (val: String) => {
store.commit("HomeCategory", val);
};
</script>

<style lang="scss">
.producs {
  width: 100%;
  height: 174px;
  margin-top: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1px;

  .v-slide-group__next,
  .v-slide-group__prev {
    color: black;
  }

 

  .v-tab--selected .v-tab__slider {
    display: none;
  }

  .cata-text {
    font-family: PT Sans;
    text-transform: none;
    font-weight: 700;
    color: #184363;

  }
  .bg-deep-purple-darken-4 {
    background-color: white !important;
  }

  .v-slide-group__prev {
    background: white !important;
  }

  .v-slide-group__next {
    background: white !important;
  }

  .v-card {
    height: 146px;
    display: 1px solid;

    display: flex;
    align-items: center;
  }
}

.v-tabs--density-default {
  --v-tabs-height: 91px;
}
.product-img {
  width: 48px;
}
.v-slide-group__container {
  margin-right: 0px !important;
}

.v-btn__content {
  color: black;
}

.bg-deep-purple-darken-4 {
  background-color: white !important;
  margin-bottom: 23px;
}

.v-tab.v-tab {
    --v-btn-height: var(--v-tabs-height);
    min-width: 90px;
    margin-right: 50px;
    margin-left: -10px;
}


.v-slide-group__content {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    gap: 23px !important;
    transition: all .2s cubic-bezier(.4,0,.2,1);
    white-space: nowrap;
    
}

.producs .v-btn__content {
  display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    margin-left: 20px;

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
  margin-bottom: 17px;
  height: 80px;
}

@media only screen and (max-width: 1024px) {
  .producs {
    width: 100%;
    height: 150px;

    max-width: 100%;

    border: none;
    max-width: 100%;
  }
}
</style>
