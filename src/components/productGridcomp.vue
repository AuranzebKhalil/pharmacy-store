<template>
  <div class="product-item flex-center" v-for="item in itemes" :key="item.id">
    <!-- <img
      class="preloader"
      v-if="item.showLoader"
      src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1"
      alt=""
    /> -->

    <div  class="preloader" v-if="item.showLoader">
 

      <span class="loaders"></span>

    </div>

    <div>
      <div
        class="d-flex productimg"
        @mouseleave="showOptions(false)"
        @mouseover="showOptions(item.id)"
      >
        <img :src="item.url" @click="showing(item)" alt="" />
        <div class="Sale flex-align" v-if="item.Sale === 'Sale'">
          <p>{{ item.Sale }}</p>
        </div>
        <div class="imgages" v-if="item.showOptions">
          <img src="../assets/heart.png" alt="" />
          <img @click="Wishlist(item)" src="../assets/commit-git.png" alt="" />
          <img src="../assets/loupe.png" alt="" />
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
        <p class="position">{{ item.name }}</p>
        <div class="ratings">
          <v-rating v-model="item.Rating" color="blue"></v-rating>
          <p>{{ item.Rating }}</p>
        </div>
        <h5>$ {{ item.Price }}</h5>
        <button
          v-if="existincart(item.id)"
          @click="Sending(item)"
          class="addtocartbtn flex-center"
        >
          <img src="../assets/shopping-cart (2).png" alt="" /> Add to Cart
        </button>
        <button v-else @click="cartview" class="addtocartbtn">
          <img src="../assets/shopping-cart (2).png" alt="" /> View to Cart
        </button>
      </div>
    </div>
  </div>
  <div v-if="shows">
    <RouterView>
      <popup :showes="allsum" @cut="clear" />
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from "vue";
import store from "../Store";
import popup from "../components/popup.vue";
import { PropType, ref } from "vue";
import db from "../Firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import router from "../router";

const props = defineProps<{
  items: Array<any>;
}>();

const itemes = ref(props.items);

watch(
  () => props.items,
  (newItems) => {
    itemes.value = newItems;
  }
);

let shows = ref(false);

let cartview = () => {
  router.push("/cart");
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

let activeItemId = computed(() => {
  return store.state.activeItemId;
});

let Sending = async (item: any) => {
  let data = { ...item, saller: item.id };
  activeItemId = item.id;
  store.dispatch("setCartProducts", data);
  item.showLoader = true;
  setTimeout(() => {
    item.showLoader = false;
  }, 2000);
};

let existincart = (id: String) => {
  let existincarts = store.state.cartProducts;

  let test = existincarts.some((e) => {
    return e.saller == id;
  });

  return !test;
};

let Wishlist = async (data: any) => {
  let url = ref<string>(data.url);
  let price = ref<number>(data.price);
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

<style lang="scss">
@import "../scss/variables";

.product-item {
  width: 100%;
  height: auto;
  flex-direction: column;
}

.position {
  max-height: 22px;
  overflow: hidden;
  margin-bottom: 5px;
}

.preloader {
  position: absolute;
  z-index: 1000;
  overflow: hidden;
  width: 75px;
  @include flex-center
}

.imgage {
  width: 100px;
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  display: none;
}



.loaders {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    margin-bottom: 160px;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

.heart-img,
.gitpng,
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

.productimg img {
  width: 100%;
  height: 1%;
  position: relative;
  border-radius: 13px;
}

.imgages img {

  @include product-img;

}

.imgages {
  z-index: 1000;
  margin-left: -39px;
  margin-top: 16px;
  @include flex-col

}

.show-message {
  display: flex;
}

.ratings {
  display: flex;

  .vue3-star-ratings[data-v-786b615e] {
    @include flex-between;
    height: 22px;
    width: 100%;
  }
}

.Sale {
  @include Sales;
}

.product-contant-text {
  margin-top: 15px;
}

.product-contant-text:hover p {
  @include Hover-p;
}

.v-rating__item .v-btn .v-icon {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  height: 27px !important;
  position: absolute !important;
}

.product-contant-text p {
  @include text-p;
}

.product-contant-text h5 {
  @include text-h5;
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
  @include cart-btn;
}

.addtocartbtn img {
  border: none;
  width: 20px;
  height: 20px;
}

.addtocartbtn:hover {
  @include cart-btn-hover;
}
</style>
