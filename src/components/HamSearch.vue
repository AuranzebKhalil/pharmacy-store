<template>
  <div class="search">
    <div class="close justify-end">
      <img @click="close" src="../assets/close.png" alt="" />
    </div>

    <div class="box-container flex-center">
      <div class="boxes">
        <div class="box">
          <select class="select" v-model="selectedBrand" placeholder="Catagory">
            <option>Herbs</option>
            <option>Jurosa</option>
            <option>Amere</option>
            <option>Mockup</option>
            <option>Mape</option>
            <option>Texas</option>
            <option>Bticin</option>
          </select>
        </div>
      </div>

      <div class="textAreas">
        <input
          placeholder="What are you looking for?"
          v-model="selectedCategory"
          type="text"
        />
      </div>

      <button @click="selected" class="button">Search</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Store from "../Store";
import store from "../Store/index";

let selectedCategory = ref<string>();

let close = () => {
  Store.state.searchItem = false;
};

let selectedBrand = ref<string>();

let selected = () => {
  store.commit("CategoryBrandProduct", {
    name: selectedCategory.value,
    Category: selectedBrand.value,
  });
};
</script>

<style scoped lang="scss">

@import "../scss/variables";

.search {
  width: 100%;
  max-width: 1250px;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  @include flex-col
}

.img {
  border-style: none;
  width: 26px;
  height: 26px;
  margin-top: 15px;
  margin-right: 10px;
}

.boxes {
  width: 169px;
  height: 42px;
  background-color: white;
  border-radius: 40px;
}

.close img {
  width: 28px;
  height: 28px;
}

.box-container {
  width: 100%;
  height: 30vh;
  gap: 10px;
}

.close {
  width: 100%;
  padding-right: 16px;
  margin-top: 15px;
}

.textAreas {
  width: 50%;
  height: 42px;
  border-radius: 40px;
}

.textAreas input {
@include input
}

.button {
  @include button
}

@media only screen and (max-width: 740px) {
  .box-container {
    flex-direction: column;
  }

  .box select {
    width: 100%;
  }

  .boxes {
    width: 50%;
  }
}
</style>
