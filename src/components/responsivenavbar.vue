<template>
  <div class="resposive-container">
    <img
      class="burgerimg"
      src="../assets/Screenshot from 2023-04-06 11-34-44.png"
      alt=""
    />

    <div class="searchicons">
      <img @click="Searchbars" src="../assets/search (2).png" alt="" />
      <img @click="hamebuger" src="../assets/hamburger.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from "../Store/index";

let hamebuger = () => {
  store.commit("hamburger", true);
};

let Searchbars = () => [store.commit("Searchbars", true)];
</script>

<style lang="scss">

@import "../scss/variables";

.resposive-container {
  height: 64px;
  width: 100%;
  margin-top: 5px;
  @include flex-between;
  background-color: white;
}

.burgerimg {
  width: 19%;
  margin-left: 38px;
}

.searchicons {
  margin-right: 22px;
}

.searchicons img {
  margin-right: 19px;
  width: 28px;
  cursor: pointer;
}
</style>
