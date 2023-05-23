<template>
  <div class="app">
    <div class="bg-white">
      <MainHeader />
      <covidSection />
      <SearchBar />
      <navlist />
      <!-- <Banner/>
            <ProductCategory/>
            <Gridcards/>
            <PopularCategories/>
            <FeaturedProducts/>
            <some/>
            <more/>
            <newlist/>
            <lastSection/> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// import MainHeader from '../components/MainHeader.vue'
import covidSection from "../components/covidSection.vue";
import SearchBar from "../components/SearchBar.vue";
import navlist from "../components/NavlistSection.vue";

import store from "../Store/index";

store.dispatch("getPoducts");
</script>

<style scoped lang="scss">
.app {
  // background-color: white;
  background-color: aqua;

  .v-layout--full-height {
    --v-scrollbar-offset: inherit;
    height: auto;
  }

  .v-main {
    flex: 1 0 auto;
    max-width: 100%;
    padding: var(--v-layout-top) var(--v-layout-right) var(--v-layout-bottom)
      var(--v-layout-left);
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    height: 0px;
  }
}
</style>
