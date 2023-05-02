<template>
  <v-app class="bannner">
    <v-main>
      <state class="alls" v-if="data" />
      <searchhome class="alls" v-if="item" />
      <storeSidebar class="alls" v-if="side" />

      <div class="burger">
        <burder />
      </div>

      <div class="abs" v-if="sum">
        <covidSection />
        <SearchBar />
        <navlist />
      </div>

      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import covidSection from "./components/covidSection.vue";
import SearchBar from "./components/SearchBar.vue";
import navlist from "./components/NavlistSection.vue";

import store from "./Store/index";
import state from "./components/hameberger.vue";
import { ref } from "vue";
import burder from "./components/responsivenavbar.vue";
import searchhome from "./components/HamSearch.vue";
import storeSidebar from "./components/resposiveStore.vue";
import footers from "./views/footer.vue";

// import store from "./Store/index";
// import { onMounted } from "vue";

onMounted(() => {
  store.dispatch("getPoducts");

});

onMounted(() => {
  store.commit("catasupplement");
});
// onMounted(() => {
//   store.dispatch('getPoducts');
// });

// let data = ref(store.state.hameburger)

let data = computed(() => store.state.hameburger);

let item = computed(() => store.state.searchItem);

let side = computed(() => store.state.storeSidebar);

let sum = ref(true);
</script>

<style lang="scss">
.all {
  // position: relative;
  // transform: translateX(0);
  // transform: translateY(-20%);

  // transform: translateX(10%);
  // transition: transform 2.5s ease-out;
}

.bannner {
  height: auto;
  max-width: 1250px;
  width: 100%;
  margin: auto;
}

.alls {
  position: fixed;
  z-index: 999;

  margin: auto;
  height: 100vh;
}

.abs {
  z-index: 999;
}

@media only screen and (max-width: 1000px) {
  .abs {
    display: none;
  }

  .burger {
    display: contents;
  }
}

@media only screen and (min-width: 1000px) {
  .burger {
    display: none;
  }
}

@media only screen and (max-width: 880px) {
  .als {
    width: 70%;
  }
}

@media only screen and (max-width: 580px) {
  .als {
    width: 90%;
  }
}
</style>
