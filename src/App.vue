<template>
  <v-app class="bannner">
    <div class="pre-loader mx-auto" v-if="store.state.bodyLoader">
      <img src="https://www.acbar.org/Website/Loader/loader3.gif" alt="" />
    </div>

    <div class="navber">

      <router-view name="Header"></router-view>


    </div>



    <router-view />

  </v-app>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted } from "vue";
import covidSection from "./components/covidSection.vue";
import SearchBar from "./components/SearchBar.vue";
import navlist from "./components/NavlistSection.vue";

import store from "./Store/index";
import state from "./components/hameberger.vue";
import { ref } from "vue";
import burger from "./components/responsivenavbar.vue";
import searchhome from "./components/HamSearch.vue";
import storeSidebar from "./components/resposiveStore.vue";
import footers from "./views/footer.vue";
import db, { auth } from "./Firebase/firebase";
import router from "./router";
import Store from "./Store/index";








auth.onAuthStateChanged(async (user) => {

  state.bodyLoader = true;

  if (user) {

    console.log(user.email, user.uid)
    const docRef = db.collection('admins').doc(user.uid);

    docRef.onSnapshot((doc) => {
      let data = { ...doc.data() }
      store.commit('SET_USER', data)
    state.bodyLoader = false

      store.dispatch("getadminsproduct");
      store.dispatch("wishlistproducts");

      store.dispatch("getCartProducts");

      Store.dispatch("edit_product");

      
    })

  }
  else console.log('Logged Out')
})





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
  background-color: white;
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
</style>
