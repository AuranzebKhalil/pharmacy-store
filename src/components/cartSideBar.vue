<template>
  <div class="cart-container">
    <div class="cartSideBar">
      <div class="cartNavList">
        <ul>
          <li @click="home">Home</li>
          <li>></li>
          <li @click="shop">Shop</li>
          <li>></li>
          <li @click="Cart">Cart</li>
          <li>></li>
        </ul>
      </div>
      <div class="cartReturnShop">
        <p>Your cart is currently empty.</p>
        <button @click="shop">Return to shop</button>
      </div>
    </div>
    <div class="cartProduct">
      <div class="cart-product" v-for="(item, index) in cartproducts" :key="index">
        <img class="cart-img" :src="item.url" />
        <div class="text-containers">
          <span>{{ item.name }}</span>
          <p>${{ item.price }}</p>
        </div>
        <v-spacer></v-spacer>
        <div class="left-cart">
          <div class="quantity-container">
            <button @click="decrementQuantity(item.uId, item.quantit)" class="button">
              -
            </button>
            <p class="input">{{ item.quantit }}</p>
            <button @click="incrementQuantity(item.uId, item.quantit)" class="button">
              +
            </button>
          </div>
          <img
            @click="deleteProduct(item.uId)"
            class="delete"
            src="../assets/delete (1).png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { reactive, ref } from "vue";
import db from "../Firebase/firebase";
import store from "../Store";
// import firestore from 'firebase/firesto

import firebase from "firebase/compat/app";
import router from "../router";

let cartproducts = computed(() => {
  return store.state.cartProducts;
});

onMounted(async () => {
  store.dispatch("getCartProducts");
});

const incrementQuantity = async (uId: string, quantity: number) => {
  store.dispatch("increamentQuantity", { docId: uId, quantity: quantity });
};

const decrementQuantity = async (uId: string, quantity: number) => {
  store.dispatch("decreamentQuantity", { docId: uId, quantity: quantity });
};

const deleteProduct = async (uId: String) => {
  store.dispatch("deleatQuantity", uId);

  // const product = cartproducts[index];
  // await db.collection('Cartproducts').doc(product.uId).delete();
  // cartproducts.splice(index , 1);
};

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
<style lang="scss">
.cart-container {
  display: flex;
  width: 100%;

  .quantity-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    height: 50px;

    .input {
      width: 100px;
      height: 40px;
      text-align: center;
      background-color: white;
      border-radius: 54px;
      padding-left: 11px;
      text-align: center;
    }

    .button {
      background: #184363;
      width: 30px;
      height: 30px;
      border-radius: 77px;
      /* padding: 11px; */
      color: white;
      padding-left: 11px;
      padding-right: 11px;
    }
  }

  .cartSideBar {
    width: 18%;
    height: 50vh;
  }

  .text-containers {
    padding: 13px;
    display: flex;

    flex-direction: column;
    gap: 24px;
  }

  .cartProduct {
    width: 82%;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }

  .delete {
    width: 30px;
  }

  .cartNavList {
    padding: 30px;
    padding-top: 40px;
  }

  .cartNavList ul {
    display: flex;
    list-style: none;
    gap: 5px;
    color: #56778f;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-transform: none;
  }

  .cartReturnShop {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
  }

  .cartReturnShop p {
    color: #56778f;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-transform: none;
  }

  .cartReturnShop button {
    width: 154px;
    height: 40px;
    text-align: center;
    border-radius: 30px;
    color: #ffffff;
    font-family: PT Sans;
    font-weight: 700;
    letter-spacing: 0px;
    background-color: #f2971f;
    margin-top: 25px;
  }

  .cartReturnShop:hover button {
    background-color: #184363;
    margin-top: 25px;
  }

  .cart-product {
    display: flex;
    margin-top: 45px;
    width: 80%;
    margin: auto;
    height: 120px;
  }

  .left-cart {
    height: 118px;

    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 16px;
  }

  .cart-img {
    width: 100px;
    height: 100px;
  }

  li {
    cursor: pointer;
  }
}
</style>
