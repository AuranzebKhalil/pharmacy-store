<template>
  <div>
    <v-container class="textArea">
      <h1>Special offers</h1>
    </v-container>

    <div class="offer-banner">
      <div class="left-div">
        <h6>From $0.99</h6>
        <h2>
          Breathable <br />
          <span> Face Mask </span>
        </h2>

        <button>Shop Now ></button>
      </div>

      <div class="right-div">

       
        <h6>From $0.99</h6>
        <h2>
            Covid 19 pack<br />
          <span> Get it now 45% Off </span>
        </h2>

        <button>Shop Now ></button>
      
      
      </div>

      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.textArea {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 50px;
}

.offer-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-top: 40px;
}

.left-div {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/bn_img_12.jpg")
    no-repeat center center/cover;
  width: 47%;
  height: 270px;
  border-radius: 10px;
  margin-left: 40px;
  padding: 54px;
}

.left-div h6{

    width: 100px;
    height: 20px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px ;

}




.left-div h2{




margin-top: 20px;
font-size: 25px;
font-weight: 500;
padding-bottom: 0px;

}


.right-div h2{




margin-top: 20px;
font-size: 25px;
font-weight: 500;
padding-bottom: 0px;

}


.left-div span{



padding-top: 0px;
font-size: 22px;
    font-weight: 300;

}

.right-div span{
padding-top: 0px;
font-size: 22px;
    font-weight: 300;

}




.left-div button{

width: 110px;
height: 40px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px ;
margin-top: 30px;

}



.right-div button{

width: 110px;
height: 40px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px ;
margin-top: 30px;

}



.right-div {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/bn_img_13.jpg")
    no-repeat center center/cover;
  width: 47%;
  height: 270px;
  border-radius: 10px;
  padding: 54px;
}


@media only screen and (max-width: 810px) {

  .offer-banner{

    flex-direction: column;

  }

  .left-div{

       margin-left: 0px;
       width: 80%;

  }
  .right-div{
    margin-left: 0px;
       width: 80%;
  }


}

</style>
