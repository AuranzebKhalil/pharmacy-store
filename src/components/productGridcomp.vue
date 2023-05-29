<template>
  <div class="product-item" v-for="item in items" :key="item.id">
    <div
      class="d-flex"
      @mouseleave="showOptions(false)"
      @mouseover="showOptions(item.id)"
    >
      <img :src="item.url" @click="showing(item)" alt="" />

      <div class="Sale" v-if="item.Sale === 'Sale'">
        <p>{{ item.Sale }}</p>
      </div>

      <div class="imgages" v-if="item.showOptions">
        <img src="../assets/heart.png" alt="" />
        <img @click="Wishlist(item)" src="../assets/commit-git.png" alt="" />
        <img src="../assets/search.png" alt="" />
      </div>
    </div>
    <div class="product-contant-text">
      <div class="imgage">
        <img class="heart-img" src="../assets/heart.png" alt="" />
        <img
          class="gitpng"
          @click="Wishlist(item)"
          src="../assets/commit-git.png"
          alt=""
        />
        <img class="searcpng" src="../assets/search.png" alt="" />
      </div>

      <span>{{ item.catagory }}</span>

      <p class="postiotion">{{ item.name }}</p>
      <div class="ratings">
        <!-- <StarRating></StarRating> -->

        <v-rating
          v-model="item.Rating"
        ></v-rating>

        <p>{{ item.Rating }}</p>
      </div>
      <h5>$ {{ item.Price }}</h5>

      <button @click="Sending(item)" class="addtocartbtn" v-if="selecteditem">
        <img src="../assets/shopping-cart (2).png" alt="" /> Add to Cart
      </button>
      <button @click="cartview" v-if="viewitems" class="addtocartbtn">
        <img src="../assets/shopping-cart (2).png" alt="" /> View to Cart
      </button>
    </div>
  </div>
  <div v-if="shows">
    <router-view> <popup :showes="allsum" @cut="clear" /> </router-view>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import store from "../Store";
import popup from "../components/popup.vue";
import vue3starRatings from "vue3-star-ratings";

import { PropType, ref } from "vue";
import db from "../Firebase/firebase";

import { v4 as uuidv4 } from "uuid";
import router from "../router";

const props = defineProps<{
  items: Array<any>;
}>();

let selecteditem: any = ref(true);

let viewitems: any = ref(false);

let hoveredProduct = ref(null);
let shows = ref();

let cartview = () => {
  viewitems.value = false;
  selecteditem.value = true;
  router.push("/store");
};

let allsum = reactive([]);

function showing(data: any) {
  allsum.values = data;
  shows.value = !shows.value;
}

let clear = () => {
  shows.value = !shows.value;
};

let optionsStatus = ref(false);

const showOptions = (id: boolean) => {
  props.items.forEach((e) => {
    if (e.id == id) {
      e.showOptions = true;
    } else {
      e.showOptions = false;
    }
  });
};

let Sending = async (data: any) => {
  data.productId = data.id
store.dispatch('setCartProducts', data)

  // selecteditem.value = false;
  // viewitems.value = true;

  props.items.forEach((e) => {
    if (e.id == data.id) {
      viewitems.value = true; 
      // selecteditem.value = false     

    } else {
        selecteditem.value = true;
        viewitems.value = false;
    }
  });
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

<style  lang="scss">
.product-item {
  width: 100%;
  height: auto;
}

.postiotion {
  max-height: 22px;
  overflow: hidden;
  margin-bottom: 5px;
}

.imgage {
  width: 100px;
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  display: none;
}

.heart-img {
  width: 25px !important;
  background-color: #f0efef;
  padding: 4px;
}

.gitpng {
  width: 25px !important;
  background-color: #f0efef;
  padding: 4px;
}

.searcpng {
  width: 25px !important;
  background-color: #f0efef;
  padding: 4px;
}

.product-contant-text span {
  color: #15a9e3;
  font-size: 13px;
  padding: 4px;
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
  z-index: 1000;
  margin-left: -39px;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
}

.show-message {
  display: flex;
}

.ratings {
  display: flex;

  .vue3-star-ratings[data-v-786b615e] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 0rem; */
    height: 22px;
    width: 100%;
  }
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

.product-contant-text span {
  color: #15a9e3;
  font-size: 14px;
  padding: 4px;
}

.v-rating__item .v-btn .v-icon {
  transition: inherit;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  color: #f2971f;
}

.rating {
  color: #f2971f;
  padding-left: 4px;
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

// imgages


</style>
