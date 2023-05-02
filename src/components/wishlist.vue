<template>
  <div class="wish-container">
    <div class="p-10">
      <ul class="list d-flex">
        <li @click="home">Home</li>
        <li>></li>
        <li>Wishlist</li>
      </ul>
    </div>

    <div class="wish">
      <div class="product-wish" v-for="item in items">
        <div class="product-wish-img"></div>

        <div class="wish-contant">
          <h3></h3>

          <p>$</p>
        </div>

        <div class="closing">
          <img @click="close" class="close" src="../assets/close.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import router from "../router";
import Store from "../Store/index";

onMounted(() => {
  Store.dispatch("wishlistProduct");

  // console.log("asdasdasdasd");
});

let items = JSON.parse(JSON.stringify(Store.state.wishlistproduct));

let home = () => {
  router.push("/");
};

let close = () => {
  console.log(items, "llllllllllooooooooooooo");
};
</script>

<style lang="scss">
.wish {
  max-width: 100%;
  width: 90%;
  margin: auto;

  border: 1px solid black;

  border-radius: 10px;
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
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  //   position: absolute;
  border: 1px solid black;
  align-items: center;
  justify-content: space-between;
}

.product-wish-img {
  width: 70px;
  height: 70px;

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.product-wish-img img {
  width: 68%;
}

.closing {
  height: 80px;
}

.wish-contant h3 {
  display: block;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 4px;
  font-family: PT Sans;
  text-transform: none;
  font-weight: 700;
  color: #184363;
}

.wish-contant p {
  color: #15a9e3 !important;
}

.close {
  width: 20px;
  height: 20px;
  background-color: #184363;
}
</style>
