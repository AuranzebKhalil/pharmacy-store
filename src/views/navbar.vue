<template>
  <div class="bannner">
      <state class="alls" v-if="data" />
      <searchhome class="alls" v-if="item" />
      <storeSidebar class="alls" v-if="side" />
      <div class="burger">
      <burger />
      </div>
      <div class="abs" v-if="sum">
        <covidSection />
        <SearchBar />
        <navlist />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import covidSection from "../components/covidSection.vue";
import SearchBar from "../components/SearchBar.vue";
import navlist from "../components/NavlistSection.vue";

import store from "../Store/index";
import state from "../components/hameberger.vue";
import { ref } from "vue";
import burger from "../components/responsivenavbar.vue";
import searchhome from "../components/HamSearch.vue";
import storeSidebar from "../components/resposiveStore.vue";

let data = computed(() => store.state.hameburger);

let item = computed(() => store.state.searchItem);

let side = computed(() => store.state.storeSidebar);

let sum = ref(true);
</script>

<style scoped lang="scss">
.bannner {
  height: auto;
  max-width: 1450px;
  width: 100%;
  margin: auto;
  height: 209px !important;
  position: revert !important;

  overflow: inherit !important;


 
}

.alls {
  position: fixed;
  z-index: 999;
  margin: auto;
  height: 100vh;
}

.pre-loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
}

.burger{
  display: none;
  position: sticky;
 z-index: 1;

}


.abs {
 position: sticky;
 z-index: 1;


}



@media only screen and (min-width: 1050px){

.alls {
  display: none;
}
}



@media only screen and (min-width: 1050px){

  .burger {
    display: none;
  }
}

@media only screen and (max-width: 1050px) {
  .abs {
    display: none;
  }

  .bannner {

  height: 8vh !important;

}
  .burger {
    display: contents;
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
