<template>
  <VMain class="main-container">
    <div class="side-bar">
      <SideBar @Events="handleChil" @minmax="minmax" @childEvent="handleChildEvent" />
    </div>

    <div class="product-container">
      <div class="shop-resposive">
        <div class="navidation">
          <ul>
            <li>Home</li>
            <li>/</li>
            <li>Shop</li>
          </ul>
        </div>

        <div class="buttonspop">
          <img @click="storeSidebar" src="../assets/hamburger.png" alt="" />
        </div>
      </div>

      <div class="contant-container d-flex aligh-center">
        <div class="diraction mr-3">
          <img src="../assets/list.png" alt="" />
          <img src="../assets/menu.png" alt="" />
          <img src="../assets/grid.png" alt="" />
        </div>

        <!-- <VSpacer></VSpacer> -->

        <div class="radio-container">
          <p class="allStore font-size-12" @click="products">Reset</p>

          <div class="storeradio d-flex">
            <VRadioGroup @click="handleClick()">
              <VRadio label="Sale Products"></VRadio>
            </VRadioGroup>
          </div>
        </div>
      </div>

      <div class="first-two-products">
        <div class="firstall">
          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_8.png"
            alt=""
          />
          <div>
            <span> Save up to 10%</span>

            <h2>
              Vitamins & <br />
              Supplements
            </h2>

            <Button> Buy Now > </Button>
          </div>
        </div>

        <div class="secoundconta">
          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_8.png"
            alt=""
          />
          <div>
            <span> New </span>

            <h2>
              Vitamins & <br />
              Supplements
            </h2>

            <Button> Buy Now > </Button>
          </div>
        </div>
      </div>

      <div class="storeProduct" v-if="  all.length == 0">

        <h1>This Product is out of Stock</h1>


      </div>



      <div class="products-items">
        <div class="grid-componet-product">
          <ProductGridcomp :items="all" />
        </div>
      </div>
    </div>
  </VMain>
</template>

<script  lang="ts" setup>
import ProductGridcomp from "./productGridcomp.vue";
import SideBar from "./storeBar.vue";

import { computed, reactive } from "vue";



import store from "../Store/index";
import Store from "../Store/index";

let products = () => {
  store.dispatch("getadminsproduct");
};

let all = computed(() => store.state.storeProduct);

let handleClick = async () => {
  store.dispatch("SalePoducts")
};

const handleChildEvent = () => {
};

const handleChil = () => {
};

const minmax = () => {

  console.log(store.state.minmaxPrice, "kkkkkkkkkkkkkk");
};

let storeSidebar = () => {
  Store.commit("storeSidebar", true);
};
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  max-width: 1350px;
  width: 100%;
  margin: auto;
  background-color: white;
  .side-bar {
    width: 20%;
    height: 100vh;
    height: auto;
  }

  .v-radio-group > .v-input__control {
    flex-direction: column;
    width: 234p !important;
  }

.storeProduct{

  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.storeProduct h1{

  font-family: sans-serif;
  font-size: 25px;
  text-align: center;
  color: #262626;
}
  .radio-container{
display: flex;
align-items: center;


  }

  .contant-container {
    width: 100%;

    align-items: center;
    justify-content: space-between;
  }

  // .v-selection-control-group {
  //   width: 212px;
  //   position: fixed;
  // }

 
  .v-main .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    height: 40px !important;
    width: 100% !important;
}
  .paragraph {
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 24px;
    letter-spacing: 0px;
    color: #56778f;
    cursor: pointer;
  }

  .v-radio-group > .v-input__control {
    flex-direction: column;
    height: 43px;
    display: inline-block;
    width: 227px;
  }

  .product-container {
    width: 80%;

    height: auto;
    margin-top: 130px;
    margin-bottom: 20px;
  }


  .radio-bar {
    --select-chips-margin-bottom: 0px;
    width: 100%;
    height: 40px;
    display: flex;
    display: flex !important;
    justify-content: end;
    align-items: center;
  }

  .main-container .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    width: 143px;
    height: 22px;
  }

  .diraction {
    gap: 7px;
    width: 100px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: #edf4f6;
  }

  .diraction img {
    width: 20px;
    height: 20px;
  }

  .product {
    margin-top: 20px;
  }

  .secoundconta {
    background: url(https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg)
      no-repeat center center/cover;
    border-radius: 20px;
    width: 65%;
    height: 258px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .first-two-products {
    display: flex;
    gap: 30px;

    margin-right: 20px;
    margin-top: 30px;
  }

  .grid-componet-product {
 

    margin-left: 10px;
    margin-top: 20px;
   
    height: auto;

 
display: grid;

grid-template-columns: repeat(4, 1fr);
gap: 20px;

width: 97%;
    // display: none;

  }

  .firstall {
    background: url(https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg)
      no-repeat center center/cover;
    border-radius: 20px;
    width: 65%;
    height: 258px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .Categories-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }

  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    width: 146px;
    height: 40px;
  }
}
.main-container .paragraph[data-v-1797f120][data-v-1797f120] {
  width: 73% !important;
}
.shop-resposive {
  width: 100%;
  margin-top: 0px;
  display: none;
}



// .v-main .v-selection-control-group {

//     height: 66px !important;
 
// }
.navidation ul {
  width: 100%;
  display: flex;
}

.navidation ul {
  list-style: none;
  gap: 5px;
}

.buttonspops {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfe3e7;
  widows: 80%;
  border-radius: 12px;
  margin: auto;
  height: 42px;
  // border: 1px solid black;

  margin-top: 40px;
  margin-bottom: 20px;
}


.main-container .paragraph[data-v-1797f120] {
  width: 60% !important;
}

.buttonspop {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfe3e7;
  widows: 80%;
  border-radius: 12px;
  margin: auto;
  height: 42px;
  // border: 1px solid black;

  margin-top: 40px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 1175px) {
  .side-bar {
    width: 24% !important;
  }
}

@media only screen and (max-width: 1050px) {
  .side-bar {
    display: none;
  }

  .first-two-products {
    margin-right: 0px !important;
  }
  .firstall {
    width: 100% !important;
  }

  .secoundconta {
    display: none !important;
  }

  .shop-resposive {
    display: contents;
  }
  .main-container {
    margin-top: -95px !important;
  }
  .product-container {
    width: 94% !important;
    margin: auto;
  }
}

@media only screen and (max-width: 910px) {
  .grid-componet-product {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .rating {
    display: contents !important;
    height: 26px;
  }
}



@media only screen and (max-width: 500px) {
  .grid-componet-product {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  .rating {
    display: contents !important;
    height: 26px;
  }
}

@media only screen and (max-width: 880px) {
  .main-container .contant-container[data-v-1797f120] {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    align-items: baseline;
  }


  

  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
    justify-content: end !important;
  }
}

@media only screen and (max-width: 780px) {

.ratings{

  display: none !important;

}

}


</style>
