<template>
  <div class="popup-container" v-for="data in some" :key="data">
    <div class="popup-img-section">
      <img class="popup-img" :src="data.url" alt="" />
    </div>

    <div class="popup-prodect-con">
      <img
        @click="popupcut"
        src="https://enovathemes.com/propharm/wp-content/themes/propharm/images/icons/close.svg"
        alt=""
      />

      <div class="popup-prodect-contant">
        <h1>{{ data.name }}</h1>
        <VRating class="rating"></VRating>

        <hr />

        <div class="popup-list">
          <ul>
            <li>Brand : <span>{{ data.brand }}</span></li>
            <li>Rating : <span>{{ data.Rating }}</span></li>
            <li>Memory for 1 user</li>
          </ul>
        </div>

        <h4>${{ data.Price }}</h4>

        <hr />

        <div class="popup-cart flex-center">
          <div class="quantity-container flex-center">
            <button @click="decrementQuantity" class="button">-</button>

            <input v-model="quantity" class="input" type="number" />

            <button @click="incrementQuantity" class="button">+</button>
          </div>

          <button class="addtocartbtn flex-center" @click="Sending(data)">
            <img class="cart-img" src="../assets/shopping-cart (1).png" alt="" /> Add to
            Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { reactive } from "vue";
import Store from "../Store/index";
import db from "../Firebase/firebase";
import { uuidv4 } from "@firebase/util";
// import UniqueId from 'vue-unique-id';
const emits = defineEmits(["cut"]);

// import { v4 as uuidv4 } from "uuid";

let quantity:any = ref(0);

let incrementQuantity = () => {
  quantity.value++;
};

let decrementQuantity = () => {
  quantity.value--;
};

let popupcut = () => {
  emits("cut");
};

const props = defineProps({
  showes: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
});

let some: any = reactive([props.showes.values]);

let Sending = async (data: any) => {
  let url = ref<string>(data.url);

  let Price = ref<number>(data.Price);

  let name = ref<string>(data.name);
  let Rating = ref<number>(data.Rating);

  const uniqueId = uuidv4();

  let quantit = ref<number>(quantity);


  

  let popupdata:any ={ url: url.value,
      Price: Price.value,
      Rating: Rating.value,
      quantit: quantit.value,
      name: name.value,
      uId: uniqueId,
}


Store.dispatch('popupdata', popupdata)

}
</script>

<style lang="scss">
@import "../scss/variables";

.popup-container {

  @include popup-css;
 

  .quantity-container {

    gap: 3px;
    height: 50px;

    .input {
      width: 100px;
      height: 40px;
      text-align: center;
      background-color: white;
      border-radius: 54px;
      padding-left: 11px;
    }

    .button {
      background: #184363;
      width: 30px;
      height: 30px;
      border-radius: 77px;
      color: white;
      padding-left: 11px;
      padding-right: 11px;
    }
  }

  
  .popup-img-section {
    width: 50%;

    background-color: white;
    border-radius: 20px;
  }

  .popup-img-section img {
    border-radius: 10px;
  }

  .rating {
    color: #f2971f;
    padding-left: 4px;
    padding-top: 10px;
    padding-bottom: 40px;
  }
  .popup-prodect-contant {
    background-color: white;
    width: 100%;
    height: 87vh;
    border-radius: 10px;

    gap: 50px;
  }

  .popup-list {
    padding: 30px;
  }

  .popup-list li {
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 28px;
    letter-spacing: 0px;
    color: #56778f;
  }

  .popup-prodect-con {
    border-radius: 10px;

    margin-left: 19px;

    background-color: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .popup-prodect-con img {
    width: 25px;
    padding-right: 5px;
    padding-top: 5px;
  }

  .popup-img {
    width: 100%;
  }

  .addtocartbtn {
    width: 180px;
    height: 40px;
    gap: 10px;
    border-radius: 50px;
    color: white;
    background-color: #15a9e3;
  
  }

  .popup-cart:hover button {
    background-color: #56778f;
  }

  .popup-cart {
 
    margin-top: 40px;
    width: 70%;
    height: 90px;

    gap: 30px;
    border-radius: 15px;
    background-color: #f0f0f0;
  }

  .popup-prodect-contant h1 {
    padding-top: 20px;
    font-family: PT Sans;
    text-transform: none;
    font-weight: 700;
    color: #184363;
    font-size: 24px;
    line-height: 32px;
  }

  .popup-prodect-contant h4 {
    padding-top: 20px;
    font-family: PT Sans;
    text-transform: none;
    font-weight: 700;
    color: #15a9e3;
    font-size: 24px;
    line-height: 32px;
    padding-bottom: 30px;
  }
}

@media only screen and (max-width: 1215px) {

}
@media only screen and (max-width: 1150px) {
  .popup-cart {
    width: 95% !important;
  }
}

@media only screen and (max-width: 800px) {
  .popup-cart {
    width: 95% !important;
  }

  .popup-list{

    display: none;

  }

  .popup-container {
    margin: 0px !important;
    margin-left: 1px !important;
    width: 100% !important;
    flex-direction: column;
    align-items: center;
    // position: ;
  }

  .cart-img {
    display: none;
  }


  .popup-container .popup-prodect-con img {
    width: 25px;
    padding-right: 5px;
    padding-top: 5px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 6px;
    margin-right: 10px;
  }

  .popup-container .popup-prodect-con {
    width: 90%;
  }
}

@media only screen and (max-width: 455px) {
  .popup-cart {
    flex-direction: column;
    height: 150px !important;
  }

  .popup-container .quantity-container {
    margin-top: 27px;
  }

  .addtocartbtn {
    margin-bottom: 10px;
  }
}
</style>
