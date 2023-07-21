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
import { computed, onMounted } from "vue";

import store from "./Store/index";

import { ref } from "vue";

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

<style lang="scss" >

.bannner {
  height: auto;
  max-width: 1450px;
  width: 100%;
  margin: auto;
  background-color: white;
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

.flex-center{

display: flex;
align-items: center;
justify-content: center;

}

.justify-center{

  display: flex;
  justify-content: center;
}

.flex-arround{

  display: flex;
  align-items: center;
  justify-content: space-around;

}


.banner-h6{
  padding: 2px;
  width: 120px;
  border-radius: 20px;
  background-color: orange;
  text-align: center;
  color: #ffffff;
  font-size: bold;

}

.flex-align{

  display: flex;
  align-items: center;
}


.flex-between{

display: flex;
align-items: center;
justify-content: space-between;


}


.all-item{

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.select {
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


.justify-end{

  display: flex;
  justify-content: end;
}

.banner-btn {
  width: 145px;
  height: 45px;
  border-radius: 40px;
  background-color: #f29720;
  margin-top: 15px;
  margin-left: 5px;
}

.banner-css{

    width: 100%;
  height: 420px;
  display: flex;
  border-radius: 10px;
  align-items: flex-start;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  position: absolute;

}

.Sku-btn {
    width: 191px;
    height: 40px;
    border-radius: 38px;
    border: 1px solid white;
    background-color: #f29720 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.Sku-inputs {
    width: 165px;
    height: 40px;
    border-radius: 38px;
    border: 1px solid white;
    background-color: #edf4f6 !important;
    font-size: 15px;
    padding-left: 10px;
    outline: none;
  }


.flex-start-around{
    display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

</style>
