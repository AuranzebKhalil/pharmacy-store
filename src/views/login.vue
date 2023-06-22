<template>
  <!-- <main class="login">
    <section class="forms">

   

      <form class="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email address" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <v-btn  @click="login_user">Log in</v-btn>

           <v-btn router to="/signup">Sign Up</v-btn>
      </form>
    </section>
  </main> -->

  <div class="outer-container">
      <div class="sign-up-form-container">
        <div class="left-content">
          <img src="./Image_2.png" alt="" />
          <h1>Looking For Medicine</h1>
          <p>Build your amazing website with Auranzeb Khalil</p>
        </div>
        <div class="form-section">
          <h1>Propharm-Medical-Woocommerce</h1>
          <div class="sign-up-text">
            <p class="sign-up">Sign Up</p>
            <p class="greeting">Enter you details to Login in your account</p>
          </div>
          <form class="form" action="#">
         


            <input type="email"  class="text-input" placeholder="Email address" v-model="email" />
        <input type="password"  class="text-input" placeholder="Password" v-model="password" />
            <div class="agree-conditoins">
              <input class="checkbox" type="checkbox" />
              <p>I agree the terms and conditions</p>
            </div>

            <div class="">
            <v-btn class="submit-button"  @click="login_user">Log in</v-btn>
<div class="d-flex align-center mt-5">
  <p>I dont have an account</p>
   <button @click="signUp" class="ml-5 text-blue">Sign Up</button>
</div>
           

            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Store from "../Store/index";
import router from "../router/index";


let email = ref("");
let password = ref("");


let login_user = () => {

  Store.dispatch("login", {
    email: email.value,
    password: password.value,
  });

};


let signUp = () =>{

  router.push('/signup')

}

</script>

<style lang="scss" scoped>
.outer-container {
  background-color: #E2E2E2;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up-form-container {
  width: 1000px;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}
.left-content {

  background-color: #f2971f;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left-content img {
  width: 270px;
  margin: 60px 0px;
}
.left-content h1,
.left-content p {
  color: #fff;
}
.left-content h1 {
  font-size: 22px;
  margin: 3px 0px;
}
.left-content p {
  font-size: 15px;
  font-weight: 200;
}
.form-section {
  width: 55%;
  background-color: #fff;
  padding: 100px 70px;
}
.form-section h1 {
  font-size: 30px;
}
.sign-up-text {
  margin: 30px 0px 20px 0px;
}
.sign-up-text .sign-up {
  font-size: 20px;
  font-weight: 700;
}
.sign-up-text .greeting {
  font-size: 16px;
}
.form {
  display: flex;
  flex-direction: column;
}
.text-input {
  padding: 10px 14px;
  width: 360px;
  margin: 8px 0px;
  border: 1px solid #E2E2E2;
  outline: none;
}
.agree-conditoins {
  display: flex;
  margin: 7px;
}
.checkbox {
  padding: 10px;
  cursor: pointer;
}
.agree-conditoins p {
  margin: 0px 8px;
  font-size: 15px;
}
.submit-button {
  margin: 7px 0px;
  width: 120px;
  height: 40px;
 
  background-color: #f2971f;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 20px;
}
.submit-button:hover {
  background-color: #001CA9;
}
.submit-button:active {

  background-color: #f2971f;
}
@media (max-width: 1080px) {
  .sign-up-form-container {
    width: 90%;
  }
  .form-section {
    padding: 70px 40px;
  }
}
@media (max-width: 900px) {
  .text-input {
    width: 100%;
  }
}
@media (max-width: 800px) {
  .left-content {
    display: none;
  }
  .form-section {
    width: 100%;
    padding: 70px;
  }
}
@media (max-width: 500px) {
  .form-section {
    padding: 40px 30px;
  }
  .sign-up-text p {
    font-size: 13px;
  }
  .agree-conditoins p {
    font-size: 13px;
  }
  .submit-button {
    width: 100%;
  }
}
@media (max-width: 300px) {
  .form-section {
    padding: 40px 20px;
  }
}
</style>
