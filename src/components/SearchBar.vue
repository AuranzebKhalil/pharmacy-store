<template>
  <v-layout class="Search-box-container d-flex align-center h-54">
    <div class="inner-container d-flex">
      <img class="logo" src="../assets/Screenshot from 2023-04-06 11-34-44.png" alt="" />
      <v-spacer></v-spacer>

      <div class="search-section">
        <v-select
          class="catagory"
          v-model="selectedBrand"
          placeholder="Category"
          :items="['Jurosa', 'Mockup', 'Mape', 'Belt', 'Texas', 'Bticin']"
        ></v-select>
        <input
          type="text"
          placeholder="What are you looking for?"
          v-model="selectedCategory"
          class="textarea"
        />
        <v-btn
          class="Buy-btm bg-orange text-capitalize color-black"
          @click="selected"
          size=""
        >
          <router-link to="/store">
            <img src="../assets/search-interface-symbol_480.png" alt="" />
          </router-link>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <img class="logos" src="../assets/Screenshot from 2023-04-06 12-02-17.png" alt="" />
    </div>
  </v-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import store from "../Store/index";
import productGridcomp from "./productGridcomp.vue";

let selectedCategory = ref<string>();

let selectedBrand = ref<string>();

let selected = () => {
  store.commit("CategoryBrandProduct", {
    Category: selectedCategory.value,
    Brand: selectedBrand.value,
  });

  console.log(selectedCategory.value);
};
</script>

<style lang="scss">
.Search-box-container {
  height: 96px;
  background-color: white;
  // border: 1px solid black;

  .Search-box-container .search-section {
    height: 45px !important;
  }

  .v-btn__underlay {
    height: 45px;
  }

  .v-field--variant-filled {
    height: 45px !important;
  }

  .Search-box-container .logo {
    width: 221px;
    height: 51px;

    margin-left: 15px;
  }

  .logos {
    width: 174px;
    margin-right: 19px;
  }

  .search-section {
    display: flex;
    width: 64%;
    border: 1px solid white;
    border-radius: 42px;
    border-top-left-radius: 26px;
    border-bottom-left-radius: 26px;
    height: 45px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-color: #edf4f6;
    background-color: #edf4f6;
  }

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 45px;
    margin-left: 15px;
  }

  .v-field__field {
    height: 45px;
    display: flex;
    align-items: center;
    margin-left: 9px;
    margin-top: 3px;
    font-size: 15px;
    font-weight: 300;
  }

  .text-area {
    width: 100%;
    height: 45px;
  }

  .catagory {
    width: 150px;
    height: 45px;
  }

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 45px;
  }

  .textarea {
    height: 45px;
    width: 80%;
    font-size: 13px;
    outline: none;
    border-color: 3px solid #edf4f6;
    background-color: #edf4f6;
  }

  .v-btn--elevated {
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;

    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 45px;
  }

  .Search-box-container .Buy-btm img {
    width: 17px;
    margin-right: 5px;
  }

  .v-field.v-field--appended {
    border-top-left-radius: 26px;
    border-bottom-left-radius: 26px;

    height: 45px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .Search-box-container .v-field__field {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 13px 8px;
    font-size: 16px;
    font-weight: 300;
  }

  .v-input__control {
    width: 136px;
    border-color: #edf4f6;
    background-color: #edf4f6;
    border-top-left-radius: 26px;
    border-bottom-left-radius: 26px;

    height: 45px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .v-select .v-field .v-field__append-inner > .v-icon {
    padding-bottom: 8px;
  }

  .v-field__field {
    height: 45px;
  }

  .v-field--variant-filled .v-field__overlay {
    height: 45px;
  }

  .search-section {
    display: flex;
    width: 60%;

    border: 1px solid white;
    border-radius: 42px;
  }

  .Buy-btm {
    width: 56px;
  }

  .Buy-btm img {
    width: 20px;
  }

  .v-field__outline {
    position: inherit;
  }

  .Search-box-container {
    height: 45px;
  }
}
</style>
