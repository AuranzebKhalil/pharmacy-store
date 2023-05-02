<template>
  <div class="product-item" v-for="(item, index) in items" :key="index">
    <div class="d-flex">
      <img
        :src="item.url"
        @click="showing(item)"
        @mouseenter="Hoverings = true"
        @mouseleave="Hoverings = true"
        alt=""
      />

      <div class="Sale" v-if="item.Sale === 'Sale'">
        <p>{{ item.Sale }}</p>
      </div>

      <div class="imgages" v-if="Hoverings">
        <img src="../assets/heart.png" alt="" />
        <img @click="Wishlist(item)" src="../assets/commit-git.png" alt="" />
        <img src="../assets/search.png" alt="" />
      </div>
    </div>
    <div class="product-contant-text">
      <span>{{ item.catagory }}</span>

      <p class="postiotion">{{ item.name }}</p>
      <div class="ratings">
        <!-- <StarRating></StarRating> -->
        <v-rating v-model="item.Rating" :max="5" class="rating"></v-rating>
        <p>{{ item.Rating }}</p>
      </div>
      <h5>$ {{ item.Price }}</h5>

      <button class="addtocartbtn">
        <img @click="Sending(item)" src="../assets/shopping-cart (1).png" alt="" /> Add to
        Cart
      </button>
    </div>
  </div>
  <div v-if="shows">
    <popup :showes="allsum" @cut="clear" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Store from "../Store";
import popup from "../components/popup.vue";

import { PropType, ref } from "vue";
// import Store from "../Store/index";
import db from "../Firebase/firebase";
// import StarRating from "vue-star-rating";

// var StarRating = require('vue-star-rating');

import { v4 as uuidv4 } from "uuid";

let props = defineProps({
  items: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
});

let Hoverings = ref(true);

let shows = ref();

let allsum = reactive([]);

function showing(data: any) {
  allsum.values = data;
  shows.value = !shows.value;
}

let clear = () => {
  shows.value = !shows.value;
};

let Sending = async (data: any) => {
  let url = ref<string>(data.url);

  let price = ref<number>(data.Price);

  let name = ref<string>(data.name);
  let Rating = ref<number>(data.Rating);

  const uniqueId = uuidv4();

  let quantit = ref<number>(1);

  try {
    await db.collection("Cartproducts").doc(uniqueId).set({
      url: url.value,
      price: price.value,
      Rating: Rating.value,
      quantit: quantit.value,
      name: name.value,
      uId: uniqueId,
    });
    alert("product set to firebase successfully");
    console.log("successfully!");
  } catch (error) {
    console.error("Error", error);
  }
};

let Wishlist = async (data: any) => {
  let url = ref<string>(data.url);

  let price = ref<number>(data.Price);

  let name = ref<string>(data.name);
  let Rating = ref<number>(data.Rating);

  const uniqueId = uuidv4();

  let quantit = ref<number>(1);

  try {
    await db.collection("WishlistProduct").doc(uniqueId).set({
      url: url.value,
      price: price.value,
      Rating: Rating.value,
      quantit: quantit.value,
      name: name.value,
      uId: uniqueId,
    });
    alert("product set to Wishlist successfully");
    console.log("successfully!");
  } catch (error) {
    console.error("Error", error);
  }
};
</script>

<style scoped lang="scss">
.product-item {
  width: 100%;
  height: auto;
}

.postiotion {
  max-height: 22px;
  overflow: hidden;
  margin-bottom: 5px;
}
.product-item img {
  width: 100%;
  height: 1%;
  position: relative;
  border-radius: 13px;
}

.imgages img {
  width: 30px;
  height: 30px;
  padding: 6px;
  margin-top: 5px;
  border-radius: 16px;
  background-color: white;
}

.imgages {
  position: absolute;
  display: none;
  margin-left: 192px;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
}

.show-message {
  display: flex;
}

.Sale {
  position: absolute;
  margin-left: 15px;
  display: flex;
  margin-top: 14px;
  flex-direction: column;
  /* border: 1px solid; */
  font-size: 14px;
  width: 44px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  height: 21px;
  background: #39cb74;
  color: white;
}

.product-contant-text span {
  color: #15a9e3;
  font-size: 14px;
  padding: 4px;
}

.product-contant-text {
  margin-top: 15px;
}

.product-contant-text:hover p {
  color: #15a9e3;
  padding-left: 4px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  padding-top: 3px;
}

.v-rating__item .v-btn .v-icon {
  /* transition: inherit; */
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  border: 1px solid black !important;
  height: 27px !important;
  position: absolute !important;
}

.product-contant-text p {
  color: #56778f;
  padding-top: 3px;
  padding-left: 4px;
  font-weight: 500;

  font-size: 15px;
  cursor: pointer;
}

.product-contant-text h5 {
  font-size: 14px;
  font-weight: 400;
  font-family: PT Sans;
  line-height: 24px;
  letter-spacing: 0px;
  color: #56778f;
  padding-left: 4px;
  padding-top: 4px;
}

.rating {
  color: #f2971f;
  padding-left: 4px;
}

.ratings {
  display: flex;
}

.addtocartbtn {
  width: 100%;
  height: 40px;
  text-align: center;

  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 7px;

  background-color: #edf4f6;

  font-size: 17px;
  font-weight: bold;
}

.addtocartbtn img {
  border: none;
  width: 20px;
  height: 20px;
}

.addtocartbtn:hover {
  background-color: #184363;
  color: white;
  font-size: 17px;
  font-weight: bold;
}
</style>
