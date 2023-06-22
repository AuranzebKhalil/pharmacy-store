<template>
  <div class="banner-container">
    <div class="banner">
      <v-carousel>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/assets/images(2).jpeg"
          cover
        >
          <div class="first-banner-text w-100 d-flex">
            <div>
              <p>New Formula</p>

              <h1 class="banner-h1">
                Ultra Orgaic <br />
                Face cream
              </h1>

              <button class="banner-btns">Buy it Now ></button>
            </div>

            <div class="bannerimg">
              <img class="imgone" src="../assets/slider-1-as8.png" alt="" />
              <!-- <img class="imgtwo" src="../assets/slider-1-as7.png" alt="" /> -->
            </div>
          </div>
        </v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com" cover>
          <div class="secound-banner-text w-100 d-flex">
            <div>
              <p>New Formula</p>

              <h1 class="banner-h1">Ultra Orgaic <br /></h1>

              <button class="banner-btns">Buy it Now ></button>
            </div>

            <div class="bannerimg">
              <img class="imgone" src="../assets/slider-1-as8.png" alt="" />
              <!-- <img src="../assets/slider-1-as7.png" alt="" /> -->
            </div>
          </div>
        </v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/assets/images(2).jpeg"
          cover
        >
          <div class="thrid-banner-text w-100 d-flex">
            <div>
              <p>New Formula</p>

              <h1 class="banner-h1">
                Ultra Orgaic <br />
                Facesss
              </h1>

              <button class="banner-btns">Buy it Now ></button>
            </div>

            <div class="bannerimg">
              <img class="imgone" src="../assets/slider-1-as8.png" alt="" />
              <!-- <img src="../assets/slider-1-as7.png" alt="" /> -->
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>

      <div></div>
    </div>
  </div>

  <div class="slectProduct-container">
    <div class="slect-container">
      <div class="container">
        <h3>Select a product</h3>

        <v-select
          v-model="selectedCategory"
          class="catagory mx-auto"
          placeholder="category"
          :items="[
            'Medicines',
            'Protein',
            'Beauty',
            'Pets',
            'SupplementsVitamins',
            'Health Topics',
          ]"
        ></v-select>

        <v-select
          v-model="selectedBrand"
          class="catagory mx-auto"
          placeholder="Brand"
          :items="['Jurosa', 'Mockup', 'Mape', 'Belt', 'Texas', 'Bticin']"
        ></v-select>

        <h3>or</h3>
        <input class="Sku-input" type="text" placeholder="Enter SKU" />
        <button @click="selected" class="Sku-btn">  
          <div>

         

          </div>



          Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Store from "../Store";
import router from "../router";
// import slider from "./storeRespons.vue"

let selectedCategory = ref<string>();

let selectedBrand = ref<string>();

let selected = () => {

  Store.state.gifloader = true


    Store.commit("CategoryBrandProductSearch", {
    Category: selectedCategory.value,
    brand: selectedBrand.value,
     
  });





};
</script>

<style lang="scss">
.banner-container {
  width: 100%;
  // height: 75vh;

  margin-top: 50px;
}

.imgone {
  // position: absolute;
  width: 100%;
}

.bannerimg {
  display: flex;
  align-items: center;
  justify-content: center;
}





.banner .v-carousel__controls {
  background: none;
  display: none;
}
.imgtwo {
  position: relative;
  left: 164px;
  top: 74px;
  width: 88%;
}

.banner-btns {
  width: 145px;
  height: 45px;
  border-radius: 40px;
  background-color: #f29720;
  margin-top: 15px;
  margin-left: 5px;
}



.v-carousel__controls {
  background: none;
}

.banner-h1 {
  font-size: 40px;
  line-height:41px;
}

.first-banner-text {
  width: 100%;
  height: 420px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/row_big_1.jpg?id=2513")
    no-repeat center center/cover;
}

.secound-banner-text {
  width: 100%;
  height: 420px;
  display: flex;
  border-radius: 10px;
  align-items: flex-start;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  position: absolute;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg")
    no-repeat center center/cover;
}

.thrid-banner-text {
  width: 100%;
  border-radius: 10px;
  height: 420px;
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide6_back.jpg")
    no-repeat center center/cover;
}

.banner-text div {
  margin-bottom: 25vh;
  margin-left: 26px;
}

.banner {
  width: 94%;
  height: 420px;
  margin: auto;
  border-radius: 10px;

  .v-carousel__controls {
    background: none;
  }
}

.slectProduct-container {
  width: 100%;
  margin-bottom: 30px;

  .v-img {
    height: inherit;
    border-radius: 10px;
  }

  .slect-container {
    width: 80%;
    margin: auto;

    height: 104px;
    // margin-top: -119px;s
    background-color: white;
    top: 21px;
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 6px 38px -19px #000;
  }

  .container {
    display: flex;
    margin-top: 24px;
    gap: 6px;
  }

  .container h3 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 500;
  }

  .container h3 {
    padding-top: 7px;
  }

  .v-input__control {
    width: 191px;
    height: 40px;
    border-radius: 38px;
    border: 1px solid white;
    background-color: #edf4f6 !important;
  }

  .v-field__field {
    align-items: center;
    height: 40px;
    display: flex;
    margin-bottom: 16px !important;
  }

  .field__append-inner {
    align-items: first baseline;
    display: flex;
  }

  .mdi-menu-down {
    margin-bottom: 4px;
  }

  .v-icon,
  .v-field__clearable > .v-icon {
    opacity: none;
  }

  .v-select .v-field .v-field__append-inner > .v-icon {
    margin-inline-start: 4px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: -15px;
  }

  .v-select .v-field .v-field__append-inner > .v-icon {
    height: 68px;
    margin-bottom: 1px;
  }

  .v-field__append-inner,
  .v-field__clearable,
  .v-field__prepend-inner {
    padding-bottom: 14px;
  }

  .v-field--variant-filled .v-field__overlay {
    position: inherit;
    outline: none;
  }

  .v-field__outline {
    position: inherit;
  }

  .Sku-input {
    width: 165px;
    height: 40px;
    border-radius: 38px;
    border: 1px solid white;
    background-color: #edf4f6 !important;
    font-size: 15px;
    padding-left: 10px;
    outline: none;
  }

  .Sku-btn {
    width: 191px;
    height: 40px;
    border-radius: 38px;
    border: 1px solid white;
    background-color: #f29720 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 1280px) {
  .secound-banner-text {
    width: 100%;
    height: 100%;
  }

  .four-product {
    margin-top: 12px;
  }
}

@media only screen and (max-width: 1100px) {
  .secound-banner-text {
    width: 100%;
    height: 100%;
  }

  .slect-container {
    width: 90% !important;
  }

  .four-product {
    margin-top: 12px;
  }
}

@media only screen and (max-width: 1024px) {
  .slectProduct-container .v-input__control {
    width: 143px;
  }

  .slect-container {
    width: 85%;
  }

  .banner-h1 {
    font-size: 2rem;
  }

  .imgone {
    width: 64%;
  }

  .Sku-btn {
    width: 143px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slectProduct-container .container.container {
    gap: 1px;
  }

  .slectProduct-container .slect-container {
    top: -1px;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 908px) {
  .first-banner-text {
    height: 300px;
  }
  
  .v-main .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    height: 70px !important;
    width: 100% !important;
}
  .slectProduct-container .slect-container {
    position: inherit;
    top: 0px;
    margin-top: 0px;
    height: auto;
  }

  .container {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 100%;
    justify-content: center;
  }

  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    width: 100%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    // margin-left: ;
  }

  .slectProduct-container .v-input__control {
    width: 90%;
    margin-left: 35px;
    margin-top: 7px;
  }
  .slectProduct-container .container h3 {
    padding-top: 7px;
    font-size: 18px;
    font-weight: 500;
  }
  .slectProduct-container .Sku-input {
    width: 90%;
    margin-top: 7px;
  }
  .slectProduct-container .Sku-btn {
    width: 90%;
    margin-top: 7px;
    margin-bottom: 30px;
  }

  .v-btn--icon.v-btn--density-default {
    height: calc(var(--v-btn-height) + 12px);
    width: calc(var(--v-btn-height) + 12px);
    // display: none;
  }
}

@media only screen and (max-width: 500px) {
  .banner-h1 {
    font-size: 27px;
  }

  .imgone {
    width: 100%;
  }

  .bannerimg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }

  .first-banner-text {
    // height: 300px;
    height: 50%;
  }

  .v-btn--icon.v-btn--density-default {
    height: calc(var(--v-btn-height) + 12px);
    width: calc(var(--v-btn-height) + 12px);
    // display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .banner-container {
    width: 100%;
    margin-top: 0px;

  }

  .v-window__controls * {
    pointer-events: auto;
    display: none !important;
}

  .first-banner-text {
    margin-top: 1rem;
  }
}


</style>
