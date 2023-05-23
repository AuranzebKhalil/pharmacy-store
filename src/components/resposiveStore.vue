<template>
  <div class="storeSidebar">
    <div class="leftbar">
      <sidebar />
    </div>

    <div @click="storeSide" class="rightbar"></div>
  </div>
</template>

<script lang="ts" setup>
import Store from "../Store";
import sidebar from "./storeBar.vue";

let storeSide = () => {
  Store.commit("storeSidebar", false);
};
</script>

<style lang="scss">
.storeSidebar {
  width: 100%;

  max-width: 1250px;
  height: 100vh;
  // border:1px solid black;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
}

.leftbar {
  width: 40%;

  background-color: white;
  overflow: auto;
}

.rightbar {
 
  width: 60%;

  height: 100vh;
}

@media screen {
}

@media only screen and (max-width: 850px) {
  .leftbar {
    width: 70% !important;
    padding-left: 29px;
  }

  .rightbar {
    width: 0% !important;
  }

}

@media only screen and (max-width: 500px) {
  .leftbar {
    width: 100% !important;
  }

  .rightbar {
    width: 0% !important;
  }


}
</style>
