<template>
  <div class="popup-containers">
    <div class="popup-img-sections">
      <img class="popup-imgs" :src="Url" alt="" />
    </div>

    <div class="popup-prodect-confirms">
      <div class="popupclose flex-between">
        <h1>Edit your Product</h1>

        <img @click="close" src="../assets/close (1).png" alt="" />
      </div>

      <label for="input">Product Url</label>
      <input type="text" v-model="a.url" />
      <div class="Grids-section">
        <div>
          <label for="input">Product Name</label>
          <input type="text" v-model="a.name" />
        </div>

        <div>
          <label for="input">Product Price</label>
          <input type="text" v-model="a.Price" />
        </div>

        <div>
          <label for="input">Product Brand</label>
          <input type="text" v-model="a.brand" />
        </div>

        <div>
          <label for="input">Product Catagory</label>
          <input type="text" v-model="a.catagory" />
        </div>

        <div>
          <label for="input">Product Rating</label>
          <input type="text" v-model="a.Rating" />
        </div>

        <div>
          <label for="input">Product Sale</label>
          <input type="text" v-model="a.Sale" />
        </div>
      </div>
      <v-btn @click="submit">Confirm</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from "vue";

import Store from "../Store/index";
import db from "../Firebase/firebase";

const props = defineProps({
  poposhow: {
    type: Object as PropType<any[]>,
    default: () => [],
  },
});

let close = () => {
  Store.state.closingpopup = false;
};

let edit_data = JSON.parse(JSON.stringify(props.poposhow));

let items = JSON.parse(JSON.stringify(Store.state.ProductEdit));

let a: any;

for (let  i = 0; i < items.length; i++) {
  a = items[i];
}

let Url = ref<string>(a.url);

const submit = () => {
  const Name = ref<string>(a.name);
  const brand = ref<string>(a.brand);
  const catagory = ref<string>(a.catagory);
  const Price = ref<String>(a.Price);
  const Rating = ref<string>(a.Rating);
  const Sale = ref<string>(a.Sale);

  let userid = Store.state.user.userId;
  let productid;

  for (let i = 0; i < edit_data.length; i++) {
    productid = edit_data[i].productID;
  }

  const docRef = db
    .collection("admins")
    .doc(userid)
    .collection("sellerProduct")
    .doc(productid);
  docRef
    .update({
      Price: Price.value,
      Rating: Rating.value,
      Sale: Sale.value,
      brand: brand.value,
      catagory: catagory.value,
      name: Name.value,
      url: Url.value,
    })
    .then(() => {
      alert("product" + " " + Name.value + " " + "updata successfully");
    })
    .catch((error) => {});
};


</script>

<style lang="scss">

@import "../scss/variables";

.popup-containers {

  @include popup-css;
  .Grids-section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 30px;
  }

  .v-btn.v-btn--density-default {
    width: 207px;
    border-radius: 23px;
    color: #fdfdfd;
    background-color: #184363;
    margin-top: 20px;
  }
  .popup-img-sections {
    width: 30%; 
       background-color: rgb(255 252 252) !important;

    border-radius: 9px;
    border-radius: 20px;
  }

  .addtocartbtn{

  @include flex-center

  }

  .popup-prodect-confirms div lable{

    @include text-h5;

  }
  .popupclose h1 {
    
    @include text-h5;
    font-size: 30px;
    margin: 10px;

  }

  .popup-prodect-confirms {
    width: 70%;
    @include flex-col;
    margin-left: 14px;
    margin-right: 10px;
    margin-top: 10px;
    background-color: rgb(255 252 252) !important;

  }

  .popup-prodect-confirms input {
    height: 40px;
    width: 100%;
    border-radius: 10px;
    background-color: #e7e7e7;
    border: 1px solid rgb(17, 17, 17);
  }

  .popup-prodect-confirms label {
    padding-top: 10px;
  }

  .popup-imgs {
    width: 100%;
  }

  .popupclose img {
    position: absolute;
    top: 15px;
    right: 14px;
  }
}

@media only screen and (max-width: 404px) {
  .Grids-section {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

@media only screen and (max-width: 800px) {
  .img-sections {
    width: 50%;
  }

  .Grids-section {
    grid-template-columns: repeat(1, 1fr);
  }

  .popup-container {
    margin: 0px !important;
    margin-left: 1px !important;
    width: 100% !important;
    @include align-col
  }

  .cart-img {
    display: none;
  }
}

@media only screen and (max-width: 455px) {
  .popup-container .quantity-container {
    margin-top: 27px;
  }

  .addtocartbtn {
    margin-bottom: 10px;
  }
}
</style>
