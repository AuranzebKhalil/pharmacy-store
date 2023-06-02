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
import { collection, setDoc, doc, updateDoc } from "firebase/firestore";
import { ref } from "vue";
import firebase from "firebase/compat";
import Store from ".";

import { v4 as uuidv4, v4 } from "uuid";
import state from "./state";

export default {


  login: async ({ commit }: { commit: Commit }, payload: any) => {

    state.usereditdata = []

    try {
      let login = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      if(login){
        console.log('log i---n')
         router.push("/");
      }
      else{


        router.push("login");

      }
     


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
    payload: { email: string; password: string ; admin:boolean }
  ) => {

    
    try {
      let credentials = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password,
      );

      let data = {
        email: credentials.user.email,
        userId: credentials.user.uid,
        admin:payload.admin
      };

      if (credentials.user) {
        await setDoc(doc(db, "admins", credentials.user.uid), data);
        router.push("/");
      }
      else{
        router.push("login")

      }
    } catch (error: any) {
      return;
    }
  },

  async userdata({ commit }: { commit: Commit }, payload: any) {
    if (auth.currentUser?.uid == payload.uid) {
    }
  },

  async logout({ commit }: { commit: Commit }, details: any) {


    let logout = await signOut(auth);
    auth.signOut().then(()=>{
      state.user = {}
      router.push("/login");
    })
  },

  async fetchUser({ commit }: { commit: Commit }) {
    let test = ref(0);
  },

  // getPoducts: async ({ commit, state }: { commit: Commit; state: State }) => {
  //   state.firebaseproducts = [];
  //   const querySnapshot = await db.collection("products").get();
  //   state.storeProduct = [];
  //   querySnapshot.forEach((response) => {
  //     let data = { ...response.data(), id: response.id, showOptions: false ,productId:response.id  };
  //     commit("setProduct", data);
  //   });
  // },


  getadminsproduct: async ({ commit, state }: { commit: Commit; state: State }) => {
    state.firebaseproducts = [];
    let adminsid:any = []

    const querySnapshot = await db.collection("admins").get();
    state.storeProduct = [];
    querySnapshot.forEach((response) => {
      let data = { ...response.data() };
       adminsid.push(data.userId)
    });

for(let i=0; i < adminsid.length ; i++){
  const querySnapshot = await db.collection("admins").doc(adminsid[i]).collection('sellerProduct').get();
  querySnapshot.forEach((response) => {
    let data = { ...response.data() };
    commit("setProduct", data);
  }); 
}
  },

  edit_product: async ({ commit, state }: { commit: Commit; state: State }) => {

    let uid = state.user.userId
    const querySnapshot = await db.collection("admins").doc(uid).collection('sellerProduct').get();
    querySnapshot.forEach((response) => {
      let data = { ...response.data() , productID:response.id  };

      commit('editdata', data)
    })
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

  setCartProducts: ({ state }: { state: State }, payload:any) => {

   

    let id = state.user.userId;
    const parentDocRef = db.collection('admins').doc(id);
    const subcollectionRef = parentDocRef.collection('cart');
    const subDocRef = subcollectionRef.doc(payload.productId);
    subDocRef.set({...payload, quantit:1})
      .then(() => {

      alert('set to cart successfully')

      })
      .catch((error) => {
      });
  },


  popupdata: ({ state }: { state: State }, payload: cartProductsType) => {
    let id = state.user.userId;

    const parentDocRef = db.collection('admins').doc(id);
    const subcollectionRef = parentDocRef.collection('cart');
    const subDocRef = subcollectionRef.doc(payload.productId);
    
    subDocRef.set(payload)
      .then(() => {
        alert('set to cart successfully')
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
      snapshot.forEach((doc:any) => {
        let data = { ...doc.data(), id: doc.id, showOptions: false ,productId:doc.id, total:doc.quantit * doc.Price,


        }

        console.log(data , 'saddddddddddddddddddddddddddddddddddddddddddd')

        




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

let a:any = state.user
let productId:any = payload.docId


let id:any = state.user
let uid = id.userId
   const docRef = db.collection("admins").doc(uid).collection("cart").doc(payload.docId);
    docRef.update({ quantit: payload.quantity + 1 })
      .then(() => {
      })
      .catch((error) => {
        console.log( error);
      });
     
  },



  decreamentQuantity: async (
    {},
    payload: { docId: string; quantity: number }
  ) => {
   
let a:any = state.user
let productId:any = payload.docId
let id:any = state.user
let uid = id.userId
   const docRef = db.collection("admins").doc(uid).collection("cart").doc(payload.docId);
    docRef.update({ quantit: payload.quantity - 1 })
      .then(() => {
      })
      .catch((error) => {
        console.log( error);
      });
     
  },


  deleatQuantity: async ({}, payload:any) => {


    // console.log(payload.id, 'pppppppppppppppppppppppp')

    let id:any = state.user
let uid = id.userId

try {
  const userRef = db.collection('admins').doc(uid);
  const productRef = userRef.collection('cart').doc(payload.id);
  
  await productRef.delete();
  console.log('Product deleted successfully!');
} catch (error) {
  console.error('Error deleting product:', error);
}
  },


  wishlistdeleatitem: async ({}, payload: string) => {
    db.collection("WishlistProduct")
      .doc(payload)
      .delete()
      .then(() => {
      })
      .catch((error) => {
        console.error("Error removing item: ", error);
      });

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
