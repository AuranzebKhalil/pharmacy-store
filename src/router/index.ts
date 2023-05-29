import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import element from "../views/Element.vue";
import Store from "../views/Store.vue";
import cart from "../views/cart.vue";
import Form from "../views/Form.vue";
import pop from "../components/popup.vue";
import login from "../views/login.vue";
import signup from "../views/singUp.vue";
import navber from "../views/navbar.vue";

import wishlist from "../components/wishlist.vue";
import { auth } from "../Firebase/firebase";
const routes:any = [
  {
    path: "",
    name: "Home",
    components: {
      default: Home,
      // Header: navber,
    },
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/element",
    name: "element",
    components: {
      default: element,
      Header: navber,
    },
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/store",
    name: "Store",
    components: {
      default: Store,
      Header: navber,
    },

    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/cart",
    name: "cart",
    components: {
      default: cart,
      Header: navber,
    },
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/form",
    name: "form",
    components: {
      default: Form,
      Header: navber,
    },
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/pop",
    name: "pop",
    component: pop,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/wish",
    name: "wish",
    components: {
      default: wishlist,
      Header: navber,
    },
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/login",
    name: "login ",
    component: login,
  },

  {
    path: "/signup",
    name: "signup ",
    component: signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' && auth.currentUser) {
//     next('/')
//     return;
//   }

//   if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
//     next('/login')
//     return;
//   }

//   next();
// })



export default router;
