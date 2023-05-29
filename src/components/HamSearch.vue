<template>
  <div class="search">
    <div class="close">
      <img @click="close" src="../assets/close.png" alt="" />
    </div>

    <div class="box-container">
      <div class="boxes">
        <div class="box" >
          <select  v-model="selectedBrand">
            <option>Brend</option>
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
import router from "../router";

let selectedCategory: any = ref();
let selectitems = ref<string>();

let close = () => {
  Store.state.searchItem = false;
};

let selectedBrand = ref<string>();

let selected = () => {
  store.dispatch("selectedCategoryhomeProduct", {
    Category: selectedCategory.value,
    Brand: selectedBrand.value,
  });

  router.push("/store");

  setTimeout(() => {
    Store.state.searchItem = false;
  }, 1000);

  // console.log(selectedCategory.value, selectedBrand.value);
};

let Searchbars = () => [store.commit("Searchbars", true)];
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  max-width: 1250px;
  height: 100vh;
  position: fixed;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  // flex-direction: column;
}

.close {
  width: 100%;
  display: flex;
  justify-content: end;
  padding-right: 16px;
  margin-top: 15px;
}
.box select {
  background-color: white;
  border-radius: 40px;
  color: black;
  padding: 12px;
  width: 157px;
  height: 42px;
  font-size: 14px;
  font-weight: 400;
  font-family: PT Sans;
  line-height: 24px;
  letter-spacing: 0px;
  color: #56778f;
  -webkit-appearance: button;
  appearance: button;
  padding-right: 10px;
  outline: none;
}

.box::before {
  content: "\f13a";
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.textAreas {
  width: 50%;
  height: 42px;
  border-radius: 40px;
}

.textAreas input {
  width: 100%;
  height: 42px;
  outline: none;
  background-color: white;
  border-radius: 40px;
  padding-left: 16px;
  font-size: 13px;
}

.button {
  font-size: 15px;
  line-height: 22px;
  text-align: center !important;

  height: 42px;
  width: 156px;
  border-radius: 40px;
  color: #fff;
  font-family: PT Sans;
  font-weight: 700;
  letter-spacing: 0px;
  background-color: #f2971f;
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
