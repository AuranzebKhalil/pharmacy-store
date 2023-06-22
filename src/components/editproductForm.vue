


<template>
  <div class="popup-containers" >
    <div class="popup-img-sections">
      <img class="popup-imgs" :src="Url"  alt="" />
    </div>

    <div class="popup-prodect-confirms">
   <div class="popupclose">
<h1 >Edit your Product</h1>

<img  @click="close" src="../assets/close (1).png" alt="">

   </div>
      
       <label for="input">Product Url</label>
       <input type="text" v-model="a.url">
 <div class="Grids-section">

  <div>


       <label for="input">Product Name</label>
      <input type="text" v-model="a.name">
    
  </div>
     



<div>
      <label for="input">Product Price</label>
      <input type="text" v-model="a.Price">
</div>

<div>



      <label for="input">Product Brand</label>
      <input type="text" v-model="a.brand">
</div>


<div>



      <label for="input">Product Catagory</label>
      <input type="text" v-model="a.catagory">
</div>

<div>




      <label for="input">Product Rating</label>
      <input type="text" v-model="a.Rating">
</div>

<div>



      <label for="input">Product Sale</label>
      <input type="text" v-model="a.Sale">
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
import StoreBar from "./storeBar.vue";



const props = defineProps({
  poposhow: {
    type: Object as PropType<any[]>,
    default: () => [],
  },
});

let close = () =>{

  Store.state.closingpopup = false

}

let edit_data = JSON.parse(JSON.stringify(props.poposhow));





let items = JSON.parse(JSON.stringify(Store.state.ProductEdit))

let a:any 

for(let i = 0 ; i<items.length;i++){

     a = items[i]



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
    .catch((error) => {
      console.log(error);
    });
};

let closed = () => {

  edit_data = []
  Store.state.closingpopup = false;
  

};

  
</script>

<style  lang="scss">
.popup-containers {
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
  z-index: 99;
background-color: rgb(228, 222, 222) !important ;

  width: 90%;
  height: auto;

  border-radius: 10px;
  margin: 30px;
  margin-left: 38px;
  display: flex;
  background-color: white;
  .popupclose {

display: flex;
align-items: center;
justify-content: space-between;
   

 }


 .Grids-section{

  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  gap: 30px;
  margin-top: 30px;

 }


 
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
    }


  }
.v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height));
    width: 207px;
    border-radius: 23px;
    color: white;
    background-color: blue;
    margin-top: 20px;
}
  .popup-img-sections {
    width: 30%;
    background-color: rgb(228, 222, 222) !important ;
    border-radius: 20px;
  }

 

 
  .popup-prodect-contant {
    background-color: white;
    width: 100%;
    height: auto;
    border-radius: 10px;

  }

  
.popupclose h1{

  font-family:sans-serifs;

}
 

  .popup-prodect-confirms{
  
 
   display: flex;
    flex-direction: column;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    margin-right: 10px;
    margin-top: 10px;
   
  }


  .popup-prodect-confirms input{

    height: 40px;
    width: 100%;
   border-radius: 10px;
    border: 1px solid rgb(207, 118, 118);
  }

  .popup-prodect-confirms label{
    padding-top: 10px;
  }


  .popup-imgs {
    width: 100%;
  }

  .addtocartbtn {
    width: 180px;
    height: 40px;
    gap: 10px;
    border-radius: 50px;
    color: white;
    background-color: #15a9e3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-cart:hover button {
    background-color: #56778f;
  }

  .popup-cart {
    display: flex;
    margin-top: 40px;
    width: 70%;
    height: 90px;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border-radius: 15px;
    background-color: #f0f0f0;
  }


  .popupclose img{

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
@media only screen and (max-width: 1150px) {
  .popup-cart {
    width: 95% !important;
  }
}

@media only screen and (max-width: 800px) {
  .popup-cart {
    width: 95% !important;
  }

  .img-sections{

    width: 50%;

  }

  .popup-containers {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgb(228, 222, 222) !important;
    width: 100%;
    
    border-radius: 10px;  
    display: flex;
    margin: 0px !important;
    background-color: white;
    flex-direction: column;

  }


  .Grids-section{


grid-template-columns: repeat(1 , 1fr);


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

