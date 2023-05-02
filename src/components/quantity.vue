<template>

    <div class="quantity-container">
    
   <button @click="decrementQuantity" class="button">-</button>

    <input v-model="quantity" class="input" type="number">

    <button @click="incrementQuantity" class="button">+</button>


    
    </div>


</template>

<script lang="ts" setup>
import { ref } from 'vue';


let quantity:any = ref(0)

let incrementQuantity =() =>{

    quantity.value ++
}

let decrementQuantity =() =>{

quantity.value --
}




</script>


<style scoped lang="scss">

.quantity-container{

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
     height: 50px;


.input{

    width: 100px;
    height: 40px;
    text-align: center;
    background-color: white;
    border-radius: 54px;
    padding-left: 11px;

}

.button{

    background: #184363;
    width: 30px;
    height: 30px;
    border-radius: 77px;
    /* padding: 11px; */
    color: white;
    padding-left: 11px;
    padding-right: 11px;


}

}

</style>