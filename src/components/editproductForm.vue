<template>
  <div class="popup-containe">
    <div class="popup-bg" @click="hidePopup"></div>
    <div class="popup-content" v-for="items in edit_data">
      <form>
        <div class="popup-close">
          <h1 class="text-blue">Edit Your product</h1>
          <img @click="closed" src="../assets/close (1).png" alt="" />
        </div>
        <div>
          <div class="inputFile">
            <input type="file" hidden id="inputImg" />
            <label for="inputImg">
              <img :src="items.url" />
            </label>
          </div>
        </div>
        <v-row class="mt-5 d-flex justify-space-around">
          <v-col cols="12" sm="6">
            <!-- <p>glt 0203</p> -->

            <v-text-field
              :label="items.name"
              v-model="Name"
              placeholder="Name"
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="String"
              :label="items.Price"
              v-model="Price"
              placeholder=" insert product price"
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-5 d-flex justify-space-around">
          <v-col cols="12" sm="6">
            <!-- <p>glt 0203</p> -->

            <v-text-field
              :label="items.Rating"
              v-model="Rating"
              placeholder="insert product Rating of the product"
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              type="String"
              :label="items.Sale"
              v-model="Sale"
              placeholder=" insert product Sele of the product"
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mt-5 d-flex justify-space-around">
          <v-col cols="12" sm="6">
            <v-text-field
              :label="items.url"
              placeholder="Img Url"
              variant="outlined"
              color="primary"
              v-model="Url"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              :label="items.catagory"
              v-model="catagory"
              placeholder="catagory"
              variant="outlined"
              color="primary"
            ></v-text-field>

            <v-text-field
              v-model="brand"
              :label="items.brand"
              placeholder="Brand"
              variant="outlined"
              color="primary"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn @click="editProduct" class="bg-blue">Update</v-btn>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Store } from "vuex";
import db from "../Firebase/firebase";
import store from "../Store/index";
import { computed, ref } from "vue";

const items = ["gloccery", "health", "mobiles", "electronics", "laptops"];
const hidePopup = () => {
  // store.state.editProductPopup = !store.state.editProductPopup;
};
const product = computed(() => {
  // return store.state.productToEdit;
});

const props = defineProps<{
  poposhow: Array<any>;
}>();

let edit_data = JSON.parse(JSON.stringify(props.poposhow));



const Url = ref<String>("");
const Name = ref<string>();
const brand = ref<string>("");
const catagory = ref<string>("");
const Price = ref<String>();
const Rating = ref<string>("");
const Sale = ref<string>("");

const editProduct = () => {
  console.log(Price.value);

  let userid = store.state.user.userId;
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
  store.state.closingpopup = false;
  

  



};
</script>
<style lang="scss">
.popup-bg {
  top: 0px;
  left: 0px;
  position: fixed;
  width: 70%;
  height: 100%;
}
.popup-content {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background: #fff;
  display: flex;
  border-radius: 20px;
}

.popup-close {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
form {
  width: 900px;
  margin: auto;
}
.inputFile {
  width: 190px;
  height: 190px;
}
.inputFile img {
  width: 100%;
  height: 100%;
}
</style>
