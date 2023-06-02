<template>
<div class="full-div-container">

  <div v-if="Store.state.closingpopup === true" >
    <popoups :poposhow="popdata" />
  </div>


  
<div class="products-item">

        <div class="grid-componet" v-for="item in items">
          <img :src="item.url">

          <div class="para-para">
       <p>name : {{ item.name }}</p>
           <p>catagory : {{ item.catagory }}</p>
           <p>price : {{ item.Price }}</p>
           <p>ratting : {{ item.Rating }}</p>
           <p>brand : {{ item.brand }}</p>
           <button @click="data(item)">Edit product</button>

          </div>
    
        </div>
      </div>
  
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Store from '../Store';
import { computed } from 'vue';

import popoups from '../components/editproductForm.vue'



onMounted(() => {
 
});

let items = computed(()=>{

 return JSON.parse(JSON.stringify(Store.state.usereditdata))
})

let popdata:any = ref([])

let data = (data:any) =>{
  popdata.value.push(data)
  Store.state.closingpopup = true
}


</script>


<style lang="scss" >

.full-div-container{
  max-width: 100%;
    width: 90%;
  margin: auto;
    height: auto;



}


.para-para{

  padding: 10px;
}

.para-para button{

  width: 63%;
    height: 40px;

    margin-top: 10px;
    margin-left: 20px;
    border-radius: 12px;
  color: white;
    background-color: #184363;
}

.products-item{

  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-componet{
  width: 85%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    border-radius: 14px;
  
   
    background-color: #edf4f6;

  img{

width: 100%;
border-radius: 10px;


}

}



</style>