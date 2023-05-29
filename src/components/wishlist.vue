<template>
  <div class="wish-container">
    <div class="">
      <ul class="list d-flex">
        <li @click="home">Home</li>
        <li>></li>
        <li @click="wish">Wishlist</li>
      </ul>
    </div>

    <div class="wish" v-for="item in wishdata">
      <div class="product-wish">
        <div class="product-wish-img">
          <img :src="item.url" alt="" />

          <div class="wish-contant">
            <h3>{{ item.name }}</h3>

            <p>${{ item.price }}</p>
          </div>
        </div>

        <div class="closing">
          <img
            @click="closing(item.uId)"
            class="close"
            src="../assets/close (1).png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import router from "../router";
import Store from "../Store/index";
import db from "../Firebase/firebase";

let wishdata: any = computed(() => {
  return JSON.parse(JSON.stringify(Store.state.wishlistproduct));
});

onMounted(() => {
  Store.dispatch("wishlistproducts");
});

let home = () => {
  router.push("/");
};

let wish = () => {
  // console.log("sadsd");

  router.push("/store");
};

let closing = (id: string) => {
  Store.dispatch("wishlistdeleatitem", id);
};
</script>

<style lang="scss">
.wish {
  max-width: 100%;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  background-color: white;
}

.list li {
  list-style: none;
  margin-top: 30px;
  margin-left: 4px;
  margin-bottom: 20px;
  cursor: pointer;
}

.product-wish {
  width: 98%;
  margin-top: 20px;
  margin: auto;
  display: flex;
  height: 100px;
  // padding-top: 10px;
  padding-bottom: 10px;
  //   position: absolute;
  // border: 1px solid black;
  align-items: center;
  justify-content: space-between;
}

.product-wish-img {
  // width: 70px;
  height: 70px;

  border-radius: 10px;
  display: flex;

  justify-content: center;
  margin-top: 10px;
}

.product-wish-img img {
  width: 69px;
  border-radius: 10px;
}

.wish-contant {
  margin-left: 12px;
}

.closing {
  height: 80px;
}

.wish-contant h3 {
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
  font-family: PT Sans;
  text-transform: none;
  font-weight: 700;
  color: #184363;
}

.wish-contant p {
  color: #15a9e3 !important;
  font-size: 14px;
}

.close {
  width: 20px;
  height: 20px;
}
</style>
