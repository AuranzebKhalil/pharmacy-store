<template>
  <div class="shopping-cart">
    <div class="title-stciky">
      <div class="title">
        <p>Shopping Bag</p>
      </div>
    </div>
    <div class="item" v-for="(item, index) in cartproducts" :key="index">
      <div class="buttons">
        <span class="delete-btn"
          ><img
            @click="deleteProduct(item)"
            src="../assets/close (1).png"
            alt=""
          />
        </span>
      </div>

      <div class="image">
        <img :src="item.url" alt="" />
      </div>

      <div class="description">
        <span>{{ item.name }}</span>

        <span> ${{ item.Price }} </span>
      </div>

      <div class="quantity">
        <button
          class="plus-btn"
          type="button"
          name="button"
          @click="incrementQuantity(item)"
        >
          +
        </button>
        <input type="text" name="name" :value="item.quantit" />
        <!-- <p class="input" >{{ item.quantit }}</p> -->
        <button
          class="minus-btn"
          type="button"
          name="button"
          @click="decrementQuantity(item)"
        >
          -
        </button>
      </div>

      <div class="total-price">${{ item.Price * item.quantit }}</div>
    </div>

    <div class="title-stciky">
      <div class="title">
        <p>Shopping Bag</p>

        <p>Account:{{ Store.state.user.email }}</p>
        <p>Total = {{ productsWithTotal }}</p>

        <button>Check out</button>
      </div>
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

</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #7ec855;
  font-family: "Roboto", sans-serif;
}

.title {
  height: 82px;
  border-bottom: 1px solid #e1e8ee;
  padding: 20px 30px;
  color: #063d83;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #d7dde7;
}

.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.item:nth-child(3) {
  border-top: 1px solid #e1e8ee;
  border-bottom: 1px solid #e1e8ee;
}

.buttons {
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
}
.delete-btn {
  width: 18px;
  height: 17px;
  margin-left: 24px;
  background: url(&amp;quot;delete-icn.svg&amp;quot;) no-repeat center;
}


.is-active {
  animation-name: animate;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes animate {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: right;
  }
}

.image {
  margin-right: 50px;
}

.image img {
  width: 100px;
}

.description {
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
}

.description span {
  display: block;
  font-size: 14px;
  color: #43484d;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #86939e;
}

.quantity {
  padding-top: 20px;
  margin-right: 60px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

button[class*="btn"] {
  width: 30px;
  height: 30px;
  background-color: #e1e8ee;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}

button:focus,
input:focus {
  outline: 0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
}

@media (max-width: 800px) {
  .titles {
    flex-direction: column;
    gap: 13px;
    height: auto;
  }
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
  .buttons {
    margin-right: 20px;
  }
}
</style>
