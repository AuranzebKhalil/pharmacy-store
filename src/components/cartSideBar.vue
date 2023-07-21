<template>
  <div class="cart-main-container">
    <div class="emptycart" v-if="cartproducts.length == 0">
      <h2 @click="shop">Return to shop and select to product for your cart</h2>
  </div>
  

  <div class="emptycarts">
      <h2 >Total = {{ productsWithTotal}}</h2>
      <p>Email = {{ Store.state.user.email }}</p>
  </div>



    <div
      class="product-container flex-align"
      v-for="(item, index) in cartproducts"
      :key="index"
    >
      <div class="img-section flex-align">
        <img
          @click="deleteProduct(item)"
          src="../assets/close (1).png"
          alt=""
        />

        <div class="product-img">
          <img :src="item.url" alt="" />
        </div>

        <p class="secion-name">{{ item.name }}</p>
      </div>

      <div class="counter-section flex-arround">
        <p>${{ item.Price }}</p>

        <div class="button flex-center">
          <div class="flex-center" @click="decrementQuantity(item)">
            <p>-</p>
          </div>

          <p class="input">{{ item.quantit }}</p>
          <div class="flex-center" @click="incrementQuantity(item)">
            <p>+</p>
          </div>
        </div>

        <p>${{ item.Price * item.quantit }}</p>
      </div>
    </div>

    <div class="final-container flex-center">

    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, computed } from "vue";
import store from "../Store";
import router from "../router";
import Store from "../Store";

let cartproducts: any = computed(() => {
  return JSON.parse(JSON.stringify(store.state.cartProducts));
});

onMounted(async () => {});

const incrementQuantity = async (item: any) => {
  store.dispatch("increamentQuantity", {
    docId: item.productId,
    quantity: item.quantit,
  });
};

const decrementQuantity = async (item: any) => {
  store.dispatch("decreamentQuantity", {
    docId: item.productId,
    quantity: item.quantit,
  });
};

const deleteProduct = async (item: any) => {
  store.dispatch("deleatQuantity", item);
  store.dispatch("changedata");
};

const productsWithTotal = computed(() => {
  let total = 0;
  store.state.cartProducts.map((product: any) => {
    total += product.quantit * product.Price;
  });
  return total;
});
let joy = async () => {};

let shop = () => {
  router.push("./store");
};

let home = () => {
  router.push("/");
};

let Cart = () => {
  router.push("/cart");
};
</script>
<style  lang="scss">

@import "../scss/variables";

.cart-main-container {
  width: 100%;
  height: auto;
  background-color: white;
  margin-bottom: 30px;
}

.secion-name {
  margin-left: 71px;
}
.product-container {
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 74px !important;
  margin-bottom: 20px;
}

.emptycart {
  width: 100%;
  height: 20vh;
}

.emptycart h2 {

  @include text-h2

}
.img-section {
  width: 62%;
  height: 100px;
}

.emptycarts{

  width: 100%;
  height: 100px;
  @include flex-around;

}

.emptycart h2{

  @include text-h2

}

.emptycart p{
 
@include store-p

}

.img-section img {
  width: 20px;
  height: 20px;
  margin-left: 11px;
}

.product-img img {
  width: 90px;
  height: 90px;
}

.product-img p {
  margin-left: 10px;
}

.counter-section {
  width: 50%;
}

.product-img p {
  margin-left: 50px;
}
.button {
  width: 120px;
  height: 35px;
  background-color: #cbdad5;
  border-radius: 7px;
}

.button div {
  width: 30px;
  height: 30px;
  border-radius: 20px;
}

@media only screen and (max-width: 1050px) {
  .form {
    width: 35% !important;
  }

  .cart-main-container {
    margin-top: 130px !important;
  }
}
@media only screen and (max-width: 800px) {
  .product-container {
    flex-direction: column;
    height: auto;
  }
}
@media only screen and (max-width: 660px) {

  .img-section {
    width: 100%;
  }


}

@media only screen and (max-width: 490px) {
  .product-img p {
    margin-left: 64px;
  }
}

@media only screen and (max-width: 430px) {

  .counter-section {
    gap: 12px;
  }
}
</style>
