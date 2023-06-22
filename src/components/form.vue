<template>

  <v-container>
  
  <v-text-field placeholder="Url" v-model="Url"></v-text-field>
  <v-text-field placeholder="Product Name"  v-model="Name"></v-text-field>
  <v-text-field placeholder="Product Brand" v-model="brand"></v-text-field>
  <v-text-field placeholder="Product catagory" v-model="catagory"></v-text-field>
  <v-text-field placeholder="Product price" v-model="Price"></v-text-field>
  <v-text-field placeholder="Product Rating" v-model="Rating"></v-text-field>
  <v-text-field placeholder="Product Sale" v-model="Sale"></v-text-field>
  

  <v-btn @click="Submint">Submint</v-btn>
  
  
  </v-container>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import db from '../Firebase/firebase'
import { async } from '@firebase/util';
import Store from '../Store';


const Url = ref<string>('')
const Name = ref<string>('')
const brand = ref<string>('')
const catagory = ref<string>('')
const Price = ref<number>()
const Rating = ref<string>('')
const Sale = ref<string>('')
const inCartd = ref<boolean>(false)

    let userId = Store.state.user.userId

const Submint = async () => {
      try {
        await db.collection('admins').doc(userId).collection('sellerProduct').add({
          url:Url.value,
          name:Name.value,
          brand:brand.value,
          catagory:catagory.value,
          Rating:Rating.value,
          Sale:Sale.value,
          Price:Price.value,
          inCartd:inCartd.value
        })
        alert('product set to firebase successfully')
        console.log('successfully!')
      } catch (error) {
        console.error('Error', error)
      }
    }
  

</script>


<style scoped lang="scss">

.v-container {
    width: 52% !important;
    margin-top: 250px;
    .v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height));
    background-color: cadetblue;
    color: beige;
}
}

</style>