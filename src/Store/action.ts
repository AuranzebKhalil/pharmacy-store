import { Commit } from "vuex";
import db from "../Firebase/firebase";
import type { State, cartProductsType } from "../types";
import router from "../router/index";
import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { ref } from "vue";
import firebase from "firebase/compat";
import Store from ".";

import { v4 as uuidv4, v4 } from "uuid";

export default {
  login: async ({ commit }: { commit: Commit }, payload: any) => {
    try {
      let login = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      router.push("/");
    } catch (error: any) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("user not found");

          break;

        case "auth/wrong-password":
          alert("wrong password");

        default:
          alert("somethisg went worng");
      }

      return;
    }
  },

  register: async (
    { commit }: { commit: Commit },
    payload: { email: string; password: string }
  ) => {
    try {
      let credentials = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      let data = {
        email: credentials.user.email,
        userId: credentials.user.uid,
      };
      console.log("SignUp", data, credentials.user);

      if (credentials.user) {
        await setDoc(doc(db, "admins", credentials.user.uid), data);
        router.push("/");
      }
      console.log("Set Doc");
    } catch (error: any) {
      console.log(error, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      return;
    }
  },

  async userdata({ commit }: { commit: Commit }, payload: any) {
    if (auth.currentUser?.uid == payload.uid) {
    }
  },

  async logout({ commit }: { commit: Commit }, details: any) {
    let logout = await signOut(auth);

    commit("CLEAR_USER");
    router.push("/login");
  },

  async fetchUser({ commit }: { commit: Commit }) {
    let test = ref(0);
  },

  getPoducts: async ({ commit, state }: { commit: Commit; state: State }) => {
    state.firebaseproducts = [];
    const querySnapshot = await db.collection("products").get();
    state.storeProduct = [];
    querySnapshot.forEach((response) => {
      let data = { ...response.data(), id: response.id, showOptions: false };
      commit("setProduct", data);
    });
  },

  supplements: async ({ commit, state }: { commit: Commit; state: State }) => {
    const querySnapshot = await db.collection("products").get();
    // state.storeProduct = []
    querySnapshot.forEach((response) => {
      let data = response.data();

      commit("supplementproduct", data);
    });
  },

  cartProduct: async ({ commit }: { commit: Commit }) => {
    console.log("Cart");
    const querySnapshot = await db.collection("Cartproducts").get();
    querySnapshot.forEach((response) => {
      commit("cartsproduct", response.data());
    });
  },

  SalePoducts: async ({ commit }: { commit: Commit }) => {
    commit("SaleProduct");
  },

  Catagory: async ({ commit }: { commit: Commit }, payload: String) => {
    commit("Catagory", payload);
  },

  brand: async ({ commit }: { commit: Commit }, payload: String) => {
    commit("brands", payload);
  },

  PriceData: async (
    { commit }: { commit: Commit },
    payload: { min: number; max: number }
  ) => {
    commit("PriceData", payload.min);
  },

  setCartProducts: ({ state }: { state: State }, payload: cartProductsType) => {
    let id = state.user.userId;
    console.log(id)
    console.log(payload.productId)
    const parentDocRef = db.collection('admins').doc(id);
    const subcollectionRef = parentDocRef.collection('cart');
    const subDocRef = subcollectionRef.doc(payload.productId);
    
    subDocRef.set(payload)
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document:', error);
      });
    

    
  },

  getCartProducts: ({ commit, state }: { commit: Commit; state: State }) => {
    let id = state.user.userId;

    const parentDocRef = db.collection("admins").doc(id);

    parentDocRef.collection("cart").onSnapshot((snapshot) => {
      state.cartProducts = []
      snapshot.forEach((doc) => {
        let data = { ...doc.data() };
        commit('setCartProducts', data)
      });
    });
  },

  wishlistproducts: async ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    const collectionRef = db.collection("WishlistProduct");
    collectionRef.onSnapshot((snapshot) => {
      state.wishlistproduct = [];

      snapshot.forEach((doc) => {
        let data = { ...doc.data() };
        commit("setwishlistProducts", data);
      });
    });
  },

  increamentQuantity: async (
    {},
    payload: { docId: string; quantity: number }
  ) => {
    
    
    const parentDocRef = db.collection("admins").doc(payload.docId);

    parentDocRef.collection("cart").doc(payload.docId);
    parentDocRef.update({ quantit: payload.quantity + 1 });
  },

  decreamentQuantity: async (
    {},
    payload: { docId: string; quantity: number }
  ) => {
    const parentDocRef = db.collection("admins").doc(payload.docId);

    parentDocRef.collection("cart").doc(payload.docId);
    parentDocRef.update({ quantit: payload.quantity - 1 });
  },
  deleatQuantity: async ({}, payload: string) => {
    db.collection("cart")
      .doc(payload)
      .delete()
      .then(() => {
        console.log("Item successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing item: ", error);
      });
  },

  wishlistdeleatitem: async ({}, payload: string) => {
    db.collection("WishlistProduct")
      .doc(payload)
      .delete()
      .then(() => {
        console.log("Item successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing item: ", error);
      });

    // console.log(payload , 'deleact')
  },

  selectedCategoryBrandProduct: async (
    { commit }: { commit: Commit },
    payload: { Category: any; Breand: any }
  ) => {
    commit("CategoryBrandProduct", payload);
  },

  selectedCategoryhomeProduct: async (
    { commit }: { commit: Commit },
    payload: { Category: String; Brand: string }
  ) => {
    commit("CategoryhomeProduct", payload);
  },
};
