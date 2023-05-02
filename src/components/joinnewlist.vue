<template>

<div class="newlist-container">

<span>Join our newsletter</span>
<p>Join over half a million vitamin lovers and get our latest deals, articles, and resources!</p>

<div>

<input placeholder="Enter address" type="text">
<button><img src="../assets/send.png"  alt=""> Subscribe</button>

</div>



</div>


</template>

<script lang="ts" setup>
import Store from '../Store';



 






</script>

<style lang="scss">

.newlist-container{

    width: 100%;
    height: 240px;
    background: url(https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg) no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.newlist-container div{

    width:  425px;
   
    // height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;


}

.newlist-container input{

    width: 282px;
    height: 42px;
  
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    background-color: white;
    color: black;
    padding-left: 10px;
}


.newlist-container span{

    color: #184363;
    font-size: 36px;
    font-weight: 700;
    text-transform: none;

}

.newlist-container p{

    color: #184363;
    font-size: 14px;
    font-weight: 400;
    text-transform: none;

}

.newlist-container button{

width: 143px;
height: 42px;


border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #fcb900;
    color: white;
}


@media only screen and (max-width: 589px) {

    .newlist-container{


        text-align: center;

    }

    .newlist-container div{

        flex-direction: column;
        margin-top: 10px;
            //   height: 42px;

    }

    .newlist-container input{

        border-radius: 20px;
        width: 81%;

    }

    .newlist-container button{

        border-radius: 20px;
        margin-top: 10px;

    }


}

</style>