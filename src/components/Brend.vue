<template>
  <div class="conta" outline-none  >
    <v-card>
      <v-tabs class="gap-0" outline-none   center-active >
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('Allisa')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/allice.svg"
          /></router-link>
        </v-tab>
        <v-tab
          ><router-link to="/store"
            ><img
              @click="Brands('Amere')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/ameren.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('hunter')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/hunter.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('jurosta')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/jurosta.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('Bticin')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/logo-bticinocom.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store">
            <img
              @click="Brands('mapsme')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/mapsme.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('mapsme')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/mapsme.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('optimize')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/optimize.svg"
          /></router-link>
        </v-tab>
        <v-tab>
          <router-link to="/store"
            ><img
              @click="Brands('spectra')"
              class="product-imgs"
              src="https://enovathemes.com/propharm/wp-content/uploads/spectra.svg"
          /></router-link>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import store from "../Store/index";

let Brands = (val: any) => {


  store.commit("HomeBranbs", val);
};
</script>

<style lang="scss">
.conta {
 
  height: 215px;
    max-width: 1445px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

  .v-tabs--density-default {
    height: 100px;
  }

  .v-tabs--density-default {
    /* --v-tabs-height: 48px; */
    height: 100px;
  }


  .v-icon--size-default {
    font-size: calc(var(--v-icon-size-multiplier)*1.5em);
    background-color: #edf4f6 !important;
    border-radius: 30px;
    width: 30px;
    height: 30px;

       
  
}

  .v-icon--size-default:hover {

     background-color: #15a9e3 !important;
     color: white;
  

}

.v-btn__underlay {
   
    width: 1px !important;

}

  .v-card--variant-elevated {
padding-bottom: 25px;
  }

  .v-btn__content {
    grid-area: content;
    justify-content: center;
  
  }

  .v-tab__slider {
    position: relative;
  }

  .v-tabs--density-default {
    --v-tabs-height: 100px;
    --v-tabs-width: 195px;
  }


}

.conta img {

   width: 178px;
    height: 100px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-right: -77px;

}
</style>
