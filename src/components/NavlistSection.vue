<template>
  <v-layout class="nav-container flex-center" app color="black">
    <v-app-bar class="app-bar">
      <v-btn flat rounded class="allbtn icons">
        <v-icon class="fonticon">icons mdi-format-align-left</v-icon>
        <span class="fonts"> All Categories</span>
      </v-btn>

      <v-layout class="navlist flex-align" @mouseenter="Hovering = false">
        <v-list @click="home" @mouseenter="isHovering = false"> Home </v-list>

        <v-list
          @mouseenter="isHovering = true"
          v-on:mouseleave="isHovering = false"
        >
          <p @mouseenter="Hovering = false">Shop by Brand</p>
        </v-list>
        <v-list @mouseenter="Hovering = true" v-on:mouseleave="Hovering = false"
          >Shop by Category</v-list
        >
        <v-list>Blog</v-list>
        <v-list @click="shop"> Shop</v-list>
        <v-list @click="Element">Element</v-list>
        <v-list v-if="Admins.admin === true" @click="form"> Form</v-list>
        <v-list v-if="Admins.admin === true" @click="admins">Admin</v-list>
        <v-list @click="logOut">Log out</v-list>
      </v-layout>

      <v-spacer></v-spacer>

      <div class="d-flex justify-space-around">
        <div class="heart-length flex-center">
          <p>{{ wish.length }}</p>
        </div>

        <img
          color="black"
          class="icon"
          @click="Heart"
          src="../assets/handshake.png"
          alt=""
        />

        <div class="wish-length flex-center">
          <p>{{ heart.length }}</p>
        </div>
        <img
          @click="cart"
          color="black"
          class="icon"
          src="../assets/shopping-cart (2).png"
          alt=""
        />
      </div>
    </v-app-bar>
  </v-layout>

  <div
    class="brand"
    v-show="isHovering"
    @mouseleave="Hovering = false"
    v-on:mouseleave="isHovering = false"
  >
    <Brends @mouseenter="isHovering = true" />
  </div>

  <div class="brand" v-show="Hovering" @mouseleave="Hovering = false">
    <ProductCategory @mouseenter="Hovering = true" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Brends from "../components/Brend.vue";
import ProductCategory from "../components/Category.vue";
import router from "../router/index";
import Store from "../Store/index";

const isHovering = ref(false);
const Hovering = ref(false);

let storelenght = JSON.parse(JSON.stringify(Store.state.cartProducts));

let heart = computed(() => Store.state.cartProducts);

let Admins = computed(() => JSON.parse(JSON.stringify(Store.state.user)));

let wish = computed(() => Store.state.wishlistproduct);

let home = () => {
  router.push("/");
};

let Heart = () => {
  router.push("/wish");
};
let cart = () => {
  router.push("/cart");
};

let shop = () => {
  router.push("./store");

};

let Element = () => {
  router.push("./element");
};

let admins = () => {
  router.push("/edit");
};

let form = () => {
  router.push("./form");
};

let logOut = () => {
  Store.dispatch("logout");
};
</script>

<style scoped lang="scss">

.icon {
  width: 20px;
  height: 20px;
}

.parent {
  position: absolute;
  top: 40px;
  z-index: -5555555;
}

.nav-container {
  width: 100%;
  height: 64px;
  border: 1px solid #ebe4e4;
}

.fonticon {
  width: 12px;
  height: 12px;
}

.heart-length {
  width: 14px;
  border-radius: 20px;
  height: 14px;
  z-index: 1000;
  margin-right: -26px;
  margin-top: -4px;
  background-color: #39cb74;
}

.wish-length {
  width: 14px;
  border-radius: 20px;
  height: 14px;
  z-index: 1000;
  background-color: #39cb74;
  margin-left: 29px;
  position: absolute;
  margin-top: -3px;
}

.heart-length p {
  font-size: 11px;
  color: #ebe4e4;
}

.wish-length p {
  font-size: 11px;
  color: #ebe4e4;
}
.allbtn {
  width: 156px;
  height: 45px;
  margin-left: 30px;
  background: #edf4f6;
}

.navlist {
  margin-left: 70px;
  height: 114px;
}

.v-toolbar__content > .v-btn:first-child {
  margin-inline-start: 10px;
  height: 45px;
}

.brand {
  width: 100%;
  max-width: 1450px;
  height: 100px;
  position: absolute;
}
.v-list {
  margin-right: 30px;
  color: #184363;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  height: 60px;
   display: flex;
    align-items: center;
}

.fonts {
  font-size: 13px !important;
  font-weight: 700;
  line-height: 22px !important;
  text-transform: none;
  padding-left: 8px;
}

.icons {
  height: 45px;
}

.icon {
  margin-right: 20px;
}
</style>
