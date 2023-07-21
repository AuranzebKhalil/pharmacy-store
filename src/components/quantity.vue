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
@import "../scss/variables";
.quantity-container{

    @include flex-center;
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
    color: white;
    @include left-right-10


}

}

</style>