import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './Store/index'
import vue3StarRatings from "vue3-star-ratings"
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'


loadFonts()



createApp(App).use(vuetify).use(store).use(router).mount('#app')



