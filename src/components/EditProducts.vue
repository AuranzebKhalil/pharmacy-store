<template>
  <div class="full-div-container">
    <div v-if="Store.state.closingpopup === true">
      <popoups :poposhow="popdata" />
    </div>

    <div class="products-item">
      <div class="product-item" v-for="item in items" :key="item.id">
        <div class="editer">
          <img :src="item.url" alt="" />

          <div class="Sale" v-if="item.Sale === 'Sale'">
            <p>{{ item.Sale }}</p>
          </div>
        </div>
        <div class="product-contant-text">
          <div class="imgage">
            <img class="heart-img" src="../assets/heart.png" alt="" />
            <img class="gitpng" src="../assets/commit-git.png" alt="" />
            <img class="searcpng" src="../assets/search.png" alt="" />
          </div>

          <span>{{ item.catagory }}</span>

          <p class="postiotion">{{ item.name }}</p>
          <div class="ratings">
            <v-rating v-model="item.Rating" color="blue"></v-rating>

            <p>{{ item.Rating }}</p>
          </div>
          <h5>$ {{ item.Price }}</h5>
          <h5>{{ item.brand }}</h5>

          <button @click="data(item)" class="addtocartbtn">
            <img src="../assets/shopping-cart (2).png" alt="" /> Edit Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Store from "../Store";
import { computed } from "vue";

import popoups from "../components/editproductForm.vue";

onMounted(() => {});

let items = computed(() => {
  return JSON.parse(JSON.stringify(Store.state.usereditdata));
});

let popdata: any = ref([]);

let data = (data: any) => {
  Store.state.ProductEdit = [];

  popdata.value.push(data);

  Store.state.closingpopup = true;

  Store.state.ProductEdit.push(data);
};
</script>

<style lang="scss">

@import "../scss/variables";

.full-div-container {
  max-width: 100%;
  width: 90%;
  margin: auto;
  height: auto;
}

.editer {
  display: flex;
}
.editer img {
  width: 100%;
}

.para-para {
  padding: 10px;
}

.para-para button {
 
  @include para-btn
}

.products-item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.grid-componet {
  width: 85%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 14px;
  background-color: #edf4f6;

  img {
    width: 100%;
    border-radius: 10px;
  }
}

@media only screen and (max-width: 860px) {
  .products-item {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 620px) {
  .products-item {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 350px) {
  .products-item {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
