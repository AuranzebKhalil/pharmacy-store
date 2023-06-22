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
import editorsrouter from "../components/EditProducts.vue" ;
import { getAuth, onAuthStateChanged } from "firebase/auth";
const routes:any = [
  {
    path: "",
    name: "Home",
    components: {
      default: Home,     
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
    path: "/edit",
    name: "editorsrouter",
    components: {
      default: editorsrouter,
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
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/signup",
    name: "signup ",
    component: signup,
    meta: {    requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  const auth = getAuth();
  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, resolve);
  });
  const isAuthenticated = !!user;
  if (requiresAuth && !isAuthenticated) {
    next("/signin");
  } else if (isAuthenticated && to.name === "Signin") {
    next("/");
  } else if (isAuthenticated && requiresAuth) {
    next();
  } else if (!isAuthenticated && requiresAuth) {
    next("/login");
  } else {
    next();
  }
});


export default router;
