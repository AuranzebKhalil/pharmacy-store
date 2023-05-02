<template>
  <div class="shop-container">
    <VLayout class="Categorie">
      <ul class="sideBar-navlist">
        <li @click="render('Baby')">Baby</li>
        <li @click="render('Beauty')">Beauty</li>
        <li @click="render('Mockup')">Grocery</li>
        <li @click="render('Health Topics')">Health Topics</li>
        <li @click="render('Herbs')">Herbs</li>
        <li @click="render('Medicines')">Medicines</li>
        <li @click="render('Personal Care')">Personal Care</li>
        <li @click="render('Pets')">Pets</li>
        <li @click="render('Sports Nutrition')">Sports Nutrition</li>
        <li @click="render('Supplements')">Supplements</li>
      </ul>
    </VLayout>
  </div>
</template>

<script lang="ts" setup>
import store from "../Store/index";

let render = (val: String) => {
  store.dispatch("Catagory", val);
};
</script>

<style scoped lang="scss">
.shop-container {
  width: 100%;
}

.sideBar-navlist {
  padding: 25px;
}

.sideBar-navlist li {
  color: #184363;
  font-size: 16px;
  line-height: 49px;
  font-weight: 600;
  text-transform: none;
  list-style: none;
}
</style>
