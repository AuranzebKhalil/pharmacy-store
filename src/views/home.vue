<template>
  <v-app class="app">
    <div class="bg-white">
      <navber/>
      <Banner />
      <ProductCategory />
      <Gridcards />
      <PopularCategories/>
      <FeaturedProducts />
      <some />
      <more />
      <newlist />
      <lastSection />
    </div>
  </v-app>
</template>

<script lang="ts" setup>

import navber from '../views/navbar.vue'
import covidSection from "../components/covidSection.vue";
import SearchBar from "../components/SearchBar.vue";
import navlist from "../components/NavlistSection.vue";
import Banner from "../components/HomeBanner.vue";
import ProductCategory from "../components/ProductCategory.vue";
import Gridcards from "../components/Productgrid.vue";
import PopularCategories from "../components/PopularCategories.vue";
import FeaturedProducts from "../components/FeaturedProducts.vue";
import some from "../components/Specialoffers.vue";
import more from "../components/MoreToLove.vue";
import newlist from "../components/joinnewlist.vue";
import lastSection from "../components/section.vue";
import Store from "../Store";

import { onMounted } from "vue";



onMounted(() => {
  Store.commit("catasupplement");
  Store.commit("featuredprojuct");
});

</script>

<style scoped lang="scss">
.app {
  max-width: 1450px;
  position: relative;
  z-index: 1000;
  margin: auto;
  height: auto;


}




</style>
