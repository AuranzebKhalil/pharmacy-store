<template>
  <div class="section-container">
    <div class="socalmedia">
      <img src="../assets/Screenshot from 2023-04-06 11-34-44.png" alt="" />

      <p>
        70 Washington Square South,<br />
        New York, NY 10012, United States
      </p>

      <button>Show on map</button>

      <div class="socal-icon">
        <img src="../assets/facebook-app-symbol.png" alt="" />
        <img src="../assets/instagram.png" alt="" />
        <img src="../assets/linkedin.png" alt="" />
        <img src="../assets/tumblr-logo.png" alt="" />
        <img src="../assets/youtube.png" alt="" />
      </div>
    </div>

    <div class="helpline">
      <h5>Need help</h5>

      <h1>9876 788 - HGGGY -888</h1>

      <p>
        Monday - Friday: 9:00 - 20:00 <br />
        Saturday: 9:00 - 15:00
      </p>

      <div class="email-con">
        <img src="../assets/email.png" alt="" /> <span> inbox@propharm.com</span>
      </div>
    </div>
    <div class="impormation">
      <div class="information">
        <h4>Information</h4>

        <li>About us</li>
        <li>Delivery information</li>
        <li>Privacy Policy</li>
        <li>Sales</li>
        <li>Terms & Conditions</li>
      </div>

      <div class="information">
        <h4>Account</h4>

        <li>Account</li>
        <li>My orders</li>
        <li>Account details</li>
        <li>Returns</li>
        <li>Wishlist</li>
      </div>
    </div>
  </div>

  <hr class="hr" />

  <v-footer class="footer">
    <p>Copyright 2020 Propharm. All Rights Reserved</p>

    <img src="https://enovathemes.com/propharm/wp-content/uploads/payments.png" alt="" />
  </v-footer>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "../scss/variables";

.hr {
  margin-top: 50px;
}

.section-container {
  width: 94%;
  margin: auto;
  // height: 226px;
  margin-top: 50px;
  display: flex;
  justify-content: center;

  .socalmedia {
    width: 310px;
    height: 226px;
    border-right: 2px solid #d7d7d7;
  }

  .socalmedia p {
    color: #184363;
    font-size: 14px;
    font-weight: 400;
    text-transform: none;
    line-height: 26px;
    padding-top: 12px;
    padding-bottom: 13px;
    font-family: $pt-font;
  }

  .socalmedia button {
    color: #15a9e3 !important;
    line-height: 26px;
    padding-bottom: 19px;
  }

  .helpline {
    width: 516px;
    height: 226px;

    padding-left: 40px;
  }

  .helpline h5 {
    color: #15a9e3;
    font-size: 16px;
    font-weight: 700;
    text-transform: none;
    line-height: 22px;
    font-family: $pt-font;
  }

  .helpline h1 {
    line-height: 24px;
    color: #15a9e3;
    font-size: 24px;
    font-weight: 700;
    text-transform: none;
    padding-top: 40px;
    padding-bottom: 16px;
    font-family: $pt-font;
  }

  .email-con {
    display: flex;
    align-items: center;
    gap: 10px;

    color: #15a9e3;
    font-size: 14px;
    font-weight: initial;
    line-height: 14px;

    padding-top: 55px;
  }

  .email-con img {
    width: 16px;
  }

  .helpline p {
    font-size: 14px;
    font-weight: 400;
    text-transform: none;
    font-family: $pt-font;
  }

  .impormation {
    width: 413px;
    height: 226px;

    display: flex;
    justify-content: center;
  }

  .information {
    width: 50%;
  }

  .information h4 {
    color: #15a9e3;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 24px;
    font-family: $pt-font;
    text-transform: none;
  }

  .information li {
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    font-family: $pt-font;
    line-height: 30px;
    letter-spacing: 0px;
    color: #56778f;
  }

  .socal-icon {
    display: flex;
    gap: 22px;
    padding-top: 23px;
  }

  .socal-icon img {
    width: 16px;
  }
}

.footer {
  width: 100%;
  height: 77px;
  border: 1px sollid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer p {
  color: #56778f;
  font-size: 14px;
  font-weight: 400;
  text-transform: none;
}

@media only screen and (max-width: 990px) {
  .section-container {
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 50px;
  }

  .section-container .helpline {
    height: 226px;
    padding-left: 40px;
    width: 100%;
  }

  .section-container .impormation {
    margin-top: 30px !important;
    width: 70% !important;
    width: 50%;
  }
}

@media only screen and (max-width: 990px) {
  .section-container {
  }
}

@media only screen and (max-width: 630px) {
  .section-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }


  .section-container .socalmedia {
    width: 69%;
    height: 226px;
    border-right: 2px solid #d7d7d7;
  }

  .section-container .helpline {
    width: 83%;
    height: 226px;
    padding-left: 40px;
  }
}

@media only screen and (max-width: 523px) {
  .section-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .section-container {
    margin-left: 20px !important;
  }

  .section-container .helpline {
    width: 80%;
  }

  .section-container .socalmedia {
    width: 64%;
  }

  .section-container .impormation {
    width: 80%;
  }
}

@media only screen and (max-width: 411px) {
  .section-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .section-container {
    width: 100%;
    margin-left: 0px !important;
  }

  .section-container .helpline {
    width: 100%;
  }

  .section-container .socalmedia {
    width: 82%;
  }

  .section-container .impormation {
    width: 100%;
  }
}
</style>
