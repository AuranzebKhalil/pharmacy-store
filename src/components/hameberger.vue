<template>
  <div class="apps">
    <div class="als">
      <div class="navbtn flex-center">
        <button class="btns" @click="Menu">Menu</button>
        <button class="btns" @click="shopes">Shop</button>
      </div>

      <div class="homenavlist">
        <div v-if="homes">
          <hambugerhome />
        </div>
        <div v-if="shops">
          <CardsShops />
        </div>
      </div>
    </div>

    <div @click="Hamburder" class="sum"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import hambugerhome from "../components/ResposiveHome.vue";
import CardsShops from "../components/Shophome.vue";
import Store from "../Store";

let homes = ref<boolean>(true);

let shops = ref<boolean>(false);

let Menu = () => {
  homes.value = true;
  shops.value = false;
};

let shopes = () => {
  homes.value = false;
  shops.value = true;
};

let Hamburder = () => {
  Store.commit("hamburger", false);
};
</script>

<style lang="scss">
.apps {
  width: 100%;
  max-width: 1250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
}

.als {
  width: 60%;
  height: 100vh;
  background-color: white;
}

.sum {
  width: 58%;
  height: 100vh;
}

.navbtn {
  width: 100%;
  height: 9vh;
  margin-top: 9px;
}

.btns {
  width: 166px;
  color: #ffffff;
  background-color: #15a9e3;
  padding: 8px;
  border-radius: 56px;
  margin: 0 4px;
  height: 42px;
}

.homenavlist {
  width: 100%;
}

@media only screen and (max-width: 730px) {
  .als {
    width: 90%;
  }

  .sum {
    width: 10%;
    height: 100vh;
  }
}
</style>
