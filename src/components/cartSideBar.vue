<template>

  <div class="cart-main-container">


    <div class="emptycart" v-if="  cartproducts.length == 0">
    
    
    <h2  @click="shop">Return to shop and select to product for your cart</h2>

    </div>

    <div  class="product-container" v-for="(item, index) in cartproducts" :key="index">
      <div class="img-section">
        <img @click="deleteProduct(item.uId)" src="../assets/close (1).png" alt="" />

        <div class="product-img">
          <img :src="item.url" alt="" />
        </div>

        <p class="secion-name">{{ item.name }}</p>
      </div>

      <div class="counter-section">
        <p>${{ item.price }}</p>

        <div class="button">
          <div @click="decrementQuantity(item.uId, item.quantit)"><p>-</p></div>

          <p class="input">{{ item.quantit }}</p>
          <div @click="incrementQuantity(item.uId, item.quantit)"><p>+</p></div>
        </div>

        <p>${{ item.price * item.quantit }}</p>
      </div>
    </div>

    <div class="final-container w-100%">
      <div class="code">
        <input type="text" />
        <button @click="joy">Redeem</button>
      </div>

      <div class="form">
        <div>
          <p>Subtottal</p>
          <p>$55</p>
        </div>
        <div>
          <p>name</p>
          <p>{{ store.state.user.email}}</p>
        </div>
        <div>
          <p>Coupou</p>
          <p>no</p>
        </div>

        <div>
          <h2>ToTal</h2>
          <h2>${{ productsWithTotal }}</h2>
        </div>

        <button>Check out</button>
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

let cartproducts: any = computed(() => {

  return JSON.parse(JSON.stringify(store.state.cartProducts))
});

onMounted(async () => {


  console.log(cartproducts , 'kooooo')

});



let joy = () =>{

 
  console.log(store.state.cartProducts , 'kkkkkk')

}

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

const productsWithTotal = computed(() => {
  let total = 0;
  store.state.cartProducts.map((product: any) => {
    total += product.quantit * product.price;
  });

  return total;
});

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
<style scoped lang="scss">
.cart-main-container {
  width: 100%;
  height: auto;
  background-color: white;
}

.secion-name {
  margin-left: 71px;
}
.product-container {
  width: 90%;
  height: 100px;
  margin: auto;

  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
}

.emptycart  {

  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

}


.emptycart h2{

  font-family: sans-serif;
  width: 80%;
  font-size: 18px;
  color: #262626;
  cursor: pointer;
  text-align: center;


}
.img-section {
  width: 62%;
  height: 100px;
  display: flex;

  display: flex;
  align-items: center;
}

.img-section img {
  width: 20px;
  height: 20px;
  // background-color: rgb(7, 63, 63);
  margin-left: 11px;
  // border-radius: 17px;
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
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.product-img {
  // width: 23%;
}

.product-img p {
  margin-left: 50px;
}
.button {
  width: 120px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cbdad5;
  border-radius: 7px;
}

input {
  width: 60px;
  height: 35px;
  outline: none;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  background-color: #cbdad5;
}

.button div {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.final-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.code {
  width: 50%;
  height: auto;
  border: 1px soldi black;
  display: flex;
  align-items: center;
}

.code input {
  width: 50%;
  height: 45px !important;
  height: auto;
  border: 1px soldi black;
}

.code button {
  width: 120px !important;
  height: 45px !important;
  height: auto;

  border: 1px solid;
  background-color: rgb(151, 151, 232);
}

.form {
  width: 20%;
  height: auto;
  border: 1px soldi black;
}

.form div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form div p {
  margin-top: 10px;
}

.form div h2 {
  margin-top: 10px;
}

.form button {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  border-radius: 4px;
  background-color: rgb(151, 151, 232);
}

@media only screen and (max-width: 1040px) {
  .form {
    width: 35% !important;
  }
}
@media only screen and (max-width: 800px) {
  .product-container {
    flex-direction: column;
    height: auto;
  }
}
@media only screen and (max-width: 660px) {
  .form {
    width: 60% !important;
    margin-top: 20px;
  }

  .img-section {
    width: 100%;
  }
  .code {
    display: none !important;
  }

  .section-container {
    width: 95%;
  }
}

@media only screen and (max-width: 490px) {
  .product-img p {
    margin-left: 64px;
  }
}

@media only screen and (max-width: 430px) {
  .newlist-container div {
    width: 315px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .counter-section {
    gap: 12px;
  }
}
</style>
