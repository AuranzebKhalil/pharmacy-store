<template>


  <v-app class="bannner">
 
    <div class="loader" v-if="store.state.gifloader" >

      <img src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" alt="">

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

import { useRouter } from 'vue-router';





onMounted(()=>{
  store.state.gifloader = true
 
  store.dispatch("getadminsproduct");
})


auth.onAuthStateChanged(async (user) => {

  

  if (user) {

   

    console.log(user.email, user.uid)
    const docRef = db.collection('admins').doc(user.uid);

    docRef.onSnapshot((doc) => {
      let data = { ...doc.data() }

     
      store.commit('SET_USER', data)
     
      store.dispatch("wishlistproducts");


      store.dispatch("getCartProducts");

      Store.dispatch("edit_product");
    })

  }
  else console.log('Logged Out')
})



let routers = useRouter




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
  position:absolute !important;
}

.datas{
height: 100%;
width: 100vh;
border: 1px solid black;
 
}

.loader {


  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    z-index: 999;
  

  img {
    width: 300px;
  }
}
</style>
