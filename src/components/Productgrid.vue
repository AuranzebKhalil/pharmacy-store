<template>
  <div class="grids">
    <div class="four-product">
      <div class="first-two-product">
        <div class="first">
          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_8.png"
            alt=""
          />
          <div>
            <span> Get it Now 45% OFF </span>

            <h2>Pyridoxine <span>Vitamin B6</span></h2>

            <Button> Buy Now > </Button>
          </div>
        </div>
        <div class="secound">
          <div>
            <span> Pyridoxine Vitamin B6 </span>

            <h3>
              Pyridoxine <br />
              <p>Vitamin B6</p>
            </h3>

            <h2></h2>
          </div>

          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_9.png"
            alt=""
          />
        </div>
      </div>

      <div class="first-two-product">
        <div class="three">
          <div>
            <span> Pyridoxine Vitamin B6 </span>

            <h3>
              Pyridoxine <br />
              <p class="ink">Vitamin B6</p>
            </h3>

            <Button> Buy Now > </Button>

            <h2></h2>
          </div>

          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_11.png"
            alt=""
          />
        </div>

        <div class="four">
          <div>
            <span>Big Sale 65% OFF</span>

            <p>Pyridoxine Vitamin B6</p>
            <h2>Pyridoxine</h2>
            <h3>Vitamin B6, A1, C</h3>
          </div>
          <img
            src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_2.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="lastproduct">
      <div>
        <span>Big Sale 65% OFF</span>

        <p>Pyridoxine Vitamin B6</p>
        <h3>Pyridoxine Vitamin B6</h3>

        <button>Shop Now ></button>
      </div>

      <img
        src="https://enovathemes.com/propharm/wp-content/uploads/bn_img_10.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.grids {
  width: 98%;
  margin: auto;
  display: flex;
  position: initial;
  margin-top: 212px !important;
}
.four-product {
  width: 65%;
  // height: 80vh;
  margin: auto;

  gap: 20px;
}

.first-two-product {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.first {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide2_back.jpg")
    no-repeat center center/cover;
  border-radius: 20px;
  width: 65%;
  height: 258px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.first h2 {
  line-height: 32px;
  margin-top: 0px;
  margin-bottom: 20px;
}

.first button {
  width: 110px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid black;
  color: whitesmoke;
  font-size: 16px;
  font-weight: 500;
  background-color: green;
}

.first span {
  font-weight: 400;
}

.secound {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide1_back-3.jpg")
    no-repeat center center/cover;
  border-radius: 10px;
  width: 32%;
  height: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.secound div {
  margin-top: 25px;
}

.secound span {
  font-family: 5px;
  font-weight: 300;
}

.secound h3 {
  font-size: 20px;
  font-weight: 500;
}

.secound span {
  font-weight: 300;
}

.secound img {
  margin-left: 40px;
}

.three {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide4_back.jpg")
    no-repeat center center/cover;
  border-radius: 10px;
  width: 41%;
  height: 257px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.three div {
  margin-left: 30px;
  margin-top: 30px;
}

.three div p {
  font-size: 20px;
  font-weight: 300;
}

.three span {
  font-size: 13px;
}

.three img {
  margin-top: 30px;
  height: 85%;
}

.three button {
  width: 110px;
  height: 40px;
  border-radius: 20px;
  background-color: green;
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
}

.four {
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide5_back.jpg")
    no-repeat center center/cover;
  border-radius: 10px;
  width: 56%;
  height: 257px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.four span {
  padding: 4px 4px 4px 4px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: orange;
  font-weight: 300;
  font-size: 13px;
}

.four p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.four h3 {
  font-size: 20px;
  margin-bottom: 0px;
}

.four h2 {
  margin-top: 0px;
  font-size: 20px;
  font-weight: 400;
}

.lastproduct {
  width: 32%;

  margin: auto;
  border-radius: 10px;
  background: url("https://enovathemes.com/propharm/wp-content/uploads/slide6_back.jpg")
    no-repeat center center/cover;

  gap: 20px;
  padding: 30px;

  align-items: center;
}

.lastproduct span {
  padding: 4px 4px 4px 4px;
  color: aliceblue;
  background-color: orange;
  border-radius: 20px;
  font-size: small;
}

.lastproduct p {
  font-size: 14px;
  margin-top: 9px;
  margin-bottom: 9px;
}

.lastproduct button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  color: whitesmoke;
  font-size: 15px;
  font-weight: 500;
  background-color: green;
  margin-top: 15px;
  margin-bottom: 25px;
}

.lastproduct img {
  float: right;
}

@media only screen and (min-width: 1280px) {
  .product-banner img {
    margin-top: 0px;
  }

  .Categories-product {
    grid-template-columns: repeat(4, 1fr);
  }

  .left-div {
    width: 41%;
  }
  .four-product {
    margin-top: 9px;
  }
}

@media only screen and (max-width: 1064px) {
  .four {
    gap: 3px;
  }
}

@media only screen and (max-width: 800px) {
  .first-two-product {
    flex-direction: column;
    gap: 10px;
  }

  .first {
    width: 100%;
    // width: 1%;
  }

  .three {
    width: 100%;
    gap: 30px;
  }

  .four {
    width: 100%;
    gap: 30px;
  }

  .secound {
    width: 100%;
    display: flex;
  }

  .lastproduct {
    margin-top: 16px;
    width: 87%;
    height: 266px;
    overflow: hidden;
    padding: 2rem;
    padding-left: 3rem;
  }
}

@media only screen and (max-width: 900px) {
  .grids {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .four-product {
    width: 87%;
    margin: auto;
    gap: 20px;
  }

  .lastproduct {
    margin-top: 16px;
    width: 87%;
    height: 266px;
    overflow: hidden;
    padding: 2rem;
    padding-left: 3rem;
  }

  .lastproduct img {
    float: left;
  }
}
</style>
