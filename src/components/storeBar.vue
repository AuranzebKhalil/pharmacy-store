<template>
  <VMain class="main">
    <div class="navbar">

      <div class="d-flex ">

    <VList @click="home">Home </VList>
      <VList>  ></VList>
      <VList @click="shop" class="Shop"> Shop </VList>


      </div>
    
      <div>

  <img @click="closed" src="../assets/close (1).png" alt="">

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





    <div class="sideBanner">


      <img src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_1.png" alt="">

      <p>Pyridoxine Vitamin B6</p>

      <h5>Vitamins & <br>
Supplements</h5>

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


let closed = () =>{


  store.state.storeSidebar = false

}
</script>

<style scoped lang="scss">
.v-main .v-radio-group > .v-input__control {
  width: 230px !important;
}

.v-main {

.Shop{
  color: #184363 !important;
}
  .navbar {
    width: 100%;
    gap: 6px;
    margin-top: 40px;
    position: initial !important;
    display: flex;
    margin-left: 21px;
    color: #56778f;
    align-items: center;
    justify-content: space-between;
  }

  .v-main .Categorie {
    display: flex;
    flex-direction: column;
    position: initial !important;
  }

  .v-theme--myCustomLightTheme {
    color: #56778f;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-transform: none;
    cursor: pointer;
  }

  .Range-slider{

    height: 1px;

  }

  .sideBanner{
    background: url(https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg) no-repeat center center/cover;

    width: 210px;
    margin-bottom: 55PX;
    margin-top: 40px;
    height: 390px;
    display: flex;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-left: 14px;

  p{

    color: #184363;
    font-size: 14px;
    font-weight: 400;
    text-transform: none;
    margin-top: 7px;
  }


  h5{

    color: #184363;
    font-size: 24px;
    font-weight: 600;
    text-transform: none;
    margin-top: 7px;
  }

  button{
    background: #39cb74;
    height: 40px;
    font-size: 15px !important;
    font-weight: 600;
    line-height: 22px !important;
    color: #fff;
    width: 110px;
    margin-top: 7px;
    border-radius: 38px;
    margin-top: 5px;


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

  .v-slider.v-input--horizontal .v-input__control {
    display: flex;
    align-items: center;
    display: flex;
    min-height: 32px;
    width: 280px !important;
    margin-right: 21px;
  }


  .Categorie .v-theme--myCustomLightTheme {
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 24px;
    letter-spacing: 0px;
    color: #56778f;
  }

  .sideBar-navlist {
    margin-top: 10px;
  }

  .v-slider.v-input--horizontal .v-input__control {
    align-items: center;
    display: flex;
    min-height: 32px;
    width: 197px !important;
  }

  width: 212px !important;

  .v-slider__container {
    width: 203px !important;
  }

  .sideBar-navlist:hover li {
    // color: #15a9e3;
    cursor: pointer;
  }

  .sideBar-navlist li {
    font-size: 16px;
    cursor: pointer;
    font-weight: 900;
    font-family: PT Sans;
    line-height: 16px;
    letter-spacing: 0px;
    color: #39444d;
    margin-left: 20px;
    padding: 10px;
    list-style: none;
  }

  .v-slider__container {
    width: 73% !important;
  }

  .min-max {
    margin-left: 11px;
  }

  .prices {
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    font-family: PT Sans;
    margin-left: 25px;
    margin-top: 89px;
    margin-bottom: 10px;
  }

  .v-main .v-selection-control--density-default[data-v-be320b00] {
    --v-selection-control-size: 41px;
    margin-left: 25px;
    width: 136px !important;
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
    .v-input__control {
      align-items: center;
      display: flex;
      width: 300px !important;
    }
  }

  .navbar img{
    position: absolute;
    right: 16px;
    top: 15px;
  }
  .custom-input {
    height: 41px;
    width: 81px;
    border-radius: 10px;
    background-color: #edf4f6;

    font-size: 14px;
    line-height: 16px;
    padding: 0 16px;
    border: none;

    outline: none;
  }

  .v-radio-group > .v-input__control {
    flex-direction: column;
    overflow: auto;
    height: 204px;
  }

  .v-selection-control-group {
    grid-area: control;
    display: flex;
    flex-direction: column;
    height: 204px;
    overflow: auto;
  }

  .v-selection-control--density-default {
    --v-selection-control-size: 36px;

    margin-left: 25px;
  }

  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    height: 204px;
    width: 100%;
  }

  .v-selection-control .v-label {
    margin-left: 16px;
    margin-right: 0;
    position: relative;
    padding-left: 24px;
    font-size: 13px;
    cursor: pointer;
  }

  .v-main .v-input--density-default[data-v-be320b00] {
    --select-chips-margin-bottom: 0px;
    height: 80px;
  }

  .v-main .v-slider.v-input--horizontal[data-v-be320b00] {
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 13px;
    letter-spacing: 0px;
    color: blue !important;
    width: 210px !important;
    margin: auto;
    height: 40px;
  }

  .selection-control {
    display: flex;
    flex-direction: column;
    grid-area: control;
    height: 204px;
    overflow: auto;
    margin-bottom: 21px;
  }


    .v-slider.v-input--horizontal[data-v-be320b00][data-v-be320b00] {
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 13px;
    letter-spacing: 0px;
    color: blue !important;
    width: 198px !important;
    margin: auto;
    height: 40px;
    width: -19px;
  }
}
</style>
