<template>


  <v-layout class="Header d-flex align-center" app color="black">
    <img
      class="logo"
      src="../assets/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
      alt=""
    />
    <v-spacer></v-spacer>
    <v-btn class="Buybutton bg-ongoing   text-capitalize color-black" size="">
      Buy Now
    
    </v-btn>


  </v-layout>






</template>

<script setup lang="ts">




</script>

<style scoped>
.logo {
  width: 152px;
  margin-left: 20px;
}

.align-center {
    align-items: center !important;
    height: 54px;
}

.Header {
  background-color: #262626;
  height: 54px;

 
}

.Buybutton {
  margin-right: 20px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;
  box-shadow: 0 2px 0 ongoing;
}

</style>