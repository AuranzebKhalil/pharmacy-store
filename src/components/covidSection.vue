<template>

    <v-layout class="Header d-flex align-center bg-complete h-54" app color="black">
        <p class="para"> Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
        <v-spacer></v-spacer>
       


    </v-layout>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';
import store from '../Store';
import { watch } from 'vue';

const user = computed(()=>{
    return store.state.user
})

watch(store.state.user, (value)=>{
    console.log(value)
})

</script>
  
<style scoped>
.para{
    font-size: 14px;
    margin-left: 20px;
}

.Header {
    /* background-color: #262626; */
    height: 48px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
}

.covid-para{

    padding-right: 25px;
    color: black;
    font-size: 17px;
    font-family: initial;

}

.Buy-btn {
    margin-right: 20px;
    padding: 8px 15px;
    font-size: 14px;
    font-weight: bold;
    font-family: sans-serif;
    box-shadow: 0 2px 0 ongoing;
}
</style>