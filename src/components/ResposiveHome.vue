<template>

    <div class="Home-container">



         <ul class="navlist">

                <li @click="home"> Home </li>
 
                <li>inner pages</li>
                <li>Blog</li>
                <li @click="Shop">Shop</li>

        <v-list v-if="Admins.admin === true"  @click="form"> Form</v-list>
        <v-list v-if="Admins.admin === true" @click="admins">Admin</v-list>
        <v-list @click="logOut">Log out</v-list>
                
                <li @click="element">Element</li>
               



            </ul>
  

<div class="call-con">


<button>Sales & Service Support</button>

</div>


<p>Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>

    
    </div>
    
    </template>
    
    <script setup lang="ts">
import { computed } from 'vue';

import router from '../router';

import store from "../Store/index";

let Admins = computed(() => 

 JSON.parse(JSON.stringify(store.state.user))

) 


let admins = () =>{


router.push('/edit')

}

let logOut =() =>{
  store.dispatch('logout')
}


let home = () =>{

router.push('/')
}


let Shop = () =>{

router.push('/store')
}



let element = () =>{

router.push('/element')
}




let form = () =>{

router.push('/form')
}



    
   
    </script>


    <style scoped lang="scss">

    .navlist{

        display: flex;
    flex-direction: column;

    padding: 26px;
    gap: 26px;
    list-style: none;
    }
    .navlist li{

        color: #184363;
    font-size: 17px;
    line-height: 17px;
    font-weight: 700;
    text-transform: none;

}


.call-con{

width: 100%;
display: flex;
align-items: center;
justify-content:center ;

}

.call-con button{

    height: 48px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 48px;
    font-size: 15px !important;
    font-weight: 600;
    line-height: 22px !important;
    text-transform: none;
    color: #15a9e3;

}

p{

    line-height: 22px;
    color: #9a9a9a;
    font-size: 14px;
    font-weight: 400;
    font-family: PT Sans;
    line-height: 24px;
    letter-spacing: 0px;
    padding-left: 25px;
    /* padding-right: 14px; */
    width: 78%;
    padding-top: 20px;


}


.call-con:hover button{

    height: 48px;
    font-size: 15px !important;
    font-weight: 600;
    line-height: 22px !important;
    text-transform: none;
    color: #ffffff;
    background-color: #56778f;
    width: 58%;
    border-radius: 40px


}

    
    </style>
    
    
  