<template>
  <v-app class="app">
    <v-main class="bg-white">
      <Banner />
      <ProductCategory />
      <Gridcards />
      <PopularCategories />
      <FeaturedProducts />
      <some />
      <more />
      <bottomfooter />
      <newlist />
      <lastSection />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
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
import { onMounted } from "vue";
</script>

<style scoped lang="scss">
.app {
  max-width: 1250px;
  margin: auto;
  height: auto;
  position: absolute;
}
</style>
