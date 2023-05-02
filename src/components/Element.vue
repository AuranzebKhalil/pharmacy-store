<template>

<div class="full-container">




<div class="curosal-section">

<div class="carousel-section">
    <v-carousel>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

</div>

<div class="img-section">

<img src="https://enovathemes.com/propharm/wp-content/uploads/post1.jpg" alt="">

</div>

</div>
</div>















<div class="imgs-section">


<div class="section">

<img src="https://enovathemes.com/propharm/wp-content/uploads/post1.jpg" alt="">

</div>


<div class="images-section">

<img src="https://enovathemes.com/propharm/wp-content/uploads/post6-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post5-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post4-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post7-600x387.jpg" alt="">
</div>


</div>


<div  class="pics">

    <img src="https://enovathemes.com/propharm/wp-content/uploads/post6-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post5-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post4-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post7-600x387.jpg" alt="">
<img src="https://enovathemes.com/propharm/wp-content/uploads/post1.jpg" alt="">

<img src="https://enovathemes.com/propharm/wp-content/uploads/post1.jpg" alt="">
</div>




</template>

<script lang="ts" setup>



</script>

<style lang="scss">

.curosal-section{

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50vh;
    gap: 10px;
    padding-left: 10px;
    padding-right:10px ;
    margin-top: 20px;
    gap: 25px;


    .carousel-section{

        width: 47%;
        height: 379px;
   
        border-radius:9px ;

    }

    .img-section{

        width: 47%;
        height: 379px;
              border-radius:9px ;

    }

    .img-section img{

        width: 100%;
        border-radius: 10px;

    }

    .v-window__container {
  
    height: 379px;
    border-radius:9px ;
}

.v-img__img--cover {
    object-fit: cover;
    border-radius: 10px;
}
.v-carousel__controls {

    display: none;
    border-radius:9px ;
 
}

.v-btn--icon.v-btn--density-default {

    width: 31px;
    height: 31px;
}



}


.imgs-section{

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50vh;
    gap: 10px;
    padding-left: 10px;
    padding-right:10px ;
    margin-top: 70px;
    gap: 25px;


    .section{

        width: 47%;
        height: 379px;
        border-radius:9px ;
        

    }

    .section img{

        
        width: 100%;
        border-radius: 10px;

    }

    .images-section{
        width: 47%;
        height: 379px;
        border-radius:9px ;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;

    }

    .images-section img{

        width: 274px;
        height: 181px;
        border-radius: 10px;

    }

}

.pics{

    width: 95%;
    margin: auto;
    display: flex;
    height: 122px;
    gap: 15px;
    margin-top: 55px;
    overflow: hidden;
   

}

.pics img{

    width: 190px;
    height: 122px;
     margin-left: 0px;
    border-radius: 10px;

}


</style>