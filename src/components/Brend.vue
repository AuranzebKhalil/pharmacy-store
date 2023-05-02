<template>
  <div class="conta">
    <v-card>
      <v-tabs bg-color="White" center-active>
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
              @click="Brands('ameren')"
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
              @click="Brands('bticinocom')"
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
  width: 100%;
  height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  .v-tabs--density-default {
    height: 100px;
  }

  .v-tabs--density-default {
    /* --v-tabs-height: 48px; */
    height: 100px;
  }

  .v-card--variant-elevated {
    box-shadow: 0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
      0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
      0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    padding-bottom: 25px;
  }

  .v-btn__content {
    grid-area: content;
    justify-content: center;
    /* white-space: nowrap; */
  }

  .v-tab__slider {
    position: relative;
  }

  .v-tabs--density-default {
    --v-tabs-height: 100px;
    --v-tabs-width: 195px;
  }

  .v-btn__underlay {
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.conta img {
  width: 195px;
  height: 100px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  outline: none;
  border-bottom: none !important;
}
</style>
