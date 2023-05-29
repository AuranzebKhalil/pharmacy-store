<template>
  <main class="login">
    <section class="forms">

   

      <form class="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email address" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <v-btn  @click="login_user">Log in</v-btn>

           <v-btn router to="/signup">Sign Up</v-btn>
      </form>
    </section>
  </main>
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

</script>

<style lang="scss" scoped>
.forms {
  display: flex;
  min-height: 100vh;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}

form.register {
  color: #fff;
  background-color: rgb(245, 66, 101);
  background-image: linear-gradient(
    to bottom right,
    rgb(245, 66, 101) 0%,
    rgb(189, 28, 60) 100%
  );
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

.logins {
  border: 1px solid rgb(223, 220, 220);
}

.logins {
  color: rgb(245, 66, 101);
  /* background-color: rgb(245, 66, 101); */
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

.singin {
  /* background-color: rgb(245, 66, 101); */
  border: 1px solid rgb(223, 220, 220);
  color: rgb(245, 66, 101);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
