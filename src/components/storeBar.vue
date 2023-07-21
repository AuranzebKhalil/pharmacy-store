<template>
  <VMain class="main">
    <div class="navbar flex-between">
      <div class="d-flex">
        <VList @click="home">Home </VList>
        <VList> ></VList>
        <VList @click="shop" class="Shop"> Shop </VList>
      </div>

      <div>
        <img @click="closed" src="../assets/close (1).png" alt="" />
      </div>
    </div>

    <div class="Categorie mt-11">
      <h3 class="Categories">Shop by Categories</h3>

      <ul class="sideBar-navlist">
        <li @click="render('Baby')">Baby</li>
        <li @click="render('Beauty')">Beauty</li>
        <li @click="render('Mockup')">Grocery</li>
        <li @click="render('Health Topics')">Health Topics</li>
        <li @click="render('Herbs')">Herbs</li>
        <li @click="render('Medicines')">Medicines</li>
        <li @click="render('Personal Care')">Personal Care</li>
        <li @click="render('Pets')">Pets</li>
        <li @click="render('Sports Nutrition')">Sports Nutrition</li>
        <li @click="render('Supplements')">Supplements</li>
      </ul>
    </div>

    <div class="min-max">
      <h3 class="price">Price</h3>

      <div>
        <v-range-slider
          v-model="priceRange"
          color="blue"
          height="2pxs"
          class="Range-slider"
          @click="onPriceRangeChange"
        ></v-range-slider>
      </div>
      <div class="contant pl-3 d-flex align-center">
        <input
          lable="0"
          v-model="minprice"
          class="custom-input"
          type="number"
        />
        -
        <input
          lable="100"
          v-model="maxprice"
          class="custom-input"
          type="number"
        />
      </div>
    </div>
    <h3 class="prices">Brand</h3>

    <div class="selection-control">
      <VRadioGroup>
        <VRadio
          class="paragraphs d-flex"
          v-on:click="brend('Allisa')"
          label="Allisa"
          value="Allisa"
        ></VRadio>

        <VRadio
          v-on:click="brend('Mockup')"
          class="d-flex"
          label="
  Mockup"
          value="Mockup"
        ></VRadio>

        <VRadio
          v-on:click="brend('Belt')"
          class="d-flex"
          label="
  Belt
  "
          value="Belt"
        ></VRadio>

        <VRadio
          v-on:click="brend('Bticin')"
          class="d-flex"
          label="Bticin
  "
          value="Bticin"
        ></VRadio>

        <VRadio
          v-on:click="brend('Jurosa')"
          class="d-flex"
          label="
  Jurosa
  "
          value="Jurosa"
        ></VRadio>

        <VRadio
          v-on:click="brend('Mape')"
          class="paragraphs d-flex"
          label="Mape"
          value="Mape"
        ></VRadio>

        <VRadio class="paragraphs d-flex" label="Motu" value="Motu"></VRadio>

        <VRadio
          v-on:click="brend('Optimize')"
          class="paragraphs d-flex"
          label="
  Optimize"
          value="Optimize"
        ></VRadio>

        <VRadio
          v-on:click="brend('Spectra')"
          class="paragraphs d-flex"
          label="Spectra"
          value=""
        ></VRadio>

        <VRadio
          v-on:click="brend('Sport')"
          class="paragraphs d-flex"
          label="
  Sport
  "
          value="Sport"
        ></VRadio>

        <VRadio
          v-on:click="brend('Unter')"
          class="paragraphs d-flex"
          label="
    Unter
  "
          value="Unter"
        ></VRadio>

        <VRadio
          v-on:click="brend('Waveset')"
          class="paragraphs d-flex"
          label="

    Waveset
  "
          value="Waveset"
        ></VRadio>
      </VRadioGroup>
    </div>

    <div class="sideBanner all-item">
      <img
        src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_1.png"
        alt=""
      />

      <p>Pyridoxine Vitamin B6</p>

      <h5>
        Vitamins & <br />
        Supplements
      </h5>

      <button>Shop now</button>
    </div>
  </VMain>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import store from "../Store/index";

import router from "../router";
const selectedOption = ref<string>("");
const emits = defineEmits(["childEvent", "Events", "minmax"]);

let render = (val: String) => {
  store.dispatch("Catagory", val);

  emits("Events");
};

let brend = (val: any) => {
  store.dispatch("brand", val);

  setTimeout(() => {
    emits("childEvent");
  }, 1000);
};

let home = () => {
  router.push("/");
};

let shop = () => {
  router.push("/store");
};

let priceRange = ref([0, 1000]);

let minprice = ref();
let maxprice = ref();

function onPriceRangeChange() {
  const [min, max] = priceRange.value;
  minprice.value = min;
  maxprice.value = max;

  store.commit("PriceData", { min: min, max: max });
}

let closed = () => {
  store.state.storeSidebar = false;
};
</script>

<style scoped lang="scss">


@import "../scss/variables";
.v-main .v-radio-group > .v-input__control {
  width: 230px !important;
}

.v-main {
  .Shop {
    color: #184363 !important;
  }
  .navbar {
    width: 100%;
    gap: 6px;
    margin-top: 40px;
    position: initial !important;
    margin-left: 21px;
    color: #56778f;
  }

  .sideBanner {
    background: url(https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg)
      no-repeat center center/cover;
    width: 210px;
    margin-bottom: 55px;
    margin-top: 40px;
    height: 390px;
    border-radius: 15px;
    margin-left: 14px;

    p {
   @include store-p
    }

    h5 {
     @include store-h5;
    }

    button {
  @include store-button;
    }
  }

  .Categories {
    font-family: PT Sans;
    text-transform: none;
    font-weight: 700;
    color: #184363;
    padding-left: 20px;
  }

  .Categorie {
    display: flex;
    flex-direction: column;
  }

  .sideBar-navlist {
    margin-top: 10px;
  }

  width: 212px !important;

  .v-slider__container {
    width: 203px !important;
  }

  .sideBar-navlist:hover li {
    cursor: pointer;
  }

  .sideBar-navlist li {

    @include text-li;

  }

  .min-max {
    margin-left: 11px;
  }

  .prices {
    
    @include price
  }

  .price {
    font-size: 20px;
    line-height: 8px;
    font-weight: 700;
    font-family: PT Sans;
    margin-left: 2px;
    margin-top: 38px;
    margin-bottom: 39px;
  }

  .contant {
    gap: 7px;
    margin-left: -11px;
    width: 60% !important;
    margin-top: -99px;
  }

  .navbar img {
    position: absolute;
    right: 16px;
    top: 15px;
  }
  .custom-input {

    @include custom-input

  }

  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    height: 204px;
    width: 100%;
  }

  .selection-control {
    display: flex;
    flex-direction: column;
    grid-area: control;
    height: 204px;
    overflow: auto;
    margin-bottom: 21px;
  }
}
</style>
