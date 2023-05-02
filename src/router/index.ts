import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import element from '../views/Element.vue'
import feature from '../views/feature.vue'
import topnavbar from '../views/navbar.vue'
import Store from '../views/Store.vue'
import cart from '../views/cart.vue'
import Form from '../views/Form.vue'
import pop from '../components/popup.vue'

import wishlist from '../components/wishlist.vue'
const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },

  

  {
    path: "/element",
    name: "element",
    component: element,
  },

  {
    path: "/store",
    name: "Store",
    component: Store,
  },

  {
    path: "/cart",
    name: "cart",
    component: cart,
  },

  {
    path: "/form",
    name: "form",
    component: Form,
  },

  {
    path: "/pop",
    name: "pop",
    component: pop,
  },

  {

    path:'/wish',
    name:"wish",
    component:wishlist


  }




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;