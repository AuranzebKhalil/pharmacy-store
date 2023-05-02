import { Commit } from "vuex";
import db from "../Firebase/firebase";
import type { State } from "../types";
import state from "./state";


export default {

 getPoducts: async({commit , state}:{commit: Commit;  state:State}) =>{


  const querySnapshot = await db.collection("products").get();
  state.storeProduct = []
  querySnapshot.forEach((response) => {
    let data = response.data()
    
  commit('setProduct',data)
   
  });
},



supplements: async({commit, state}:{commit: Commit; state: State}) =>{

  const querySnapshot = await db.collection("products").get();
  // state.storeProduct = []
  querySnapshot.forEach((response) => {
    let data = response.data()
    
    commit('supplementproduct', data)
   
  });
},







cartProduct: async({commit}:{commit: Commit}) =>{


  const querySnapshot = await db.collection("Cartproducts").get();
  querySnapshot.forEach((response) => {

  
//  commit('cartsproduct',response.data())

   
  });
},





SalePoducts: async({commit}:{commit: Commit}) =>{
  
 commit('SaleProduct')
   


},

Catagory: async({commit}:{commit: Commit}, payload:String) =>{
  
  commit('Catagory' , payload )
},


brand: async({commit}:{commit: Commit}, payload:String) =>{
  
  commit('brands' , payload )
},

PriceData: async({commit}:{commit: Commit}, payload:{min:number; max:number}) =>{
  
  commit('PriceData' , payload.min )

  
},
getCartProducts: ({commit, state}:{commit: Commit, state: State})=>{

  const collectionRef = db.collection('Cartproducts');
  collectionRef.onSnapshot((snapshot) => { 
    state.cartProducts = []
  snapshot.forEach((doc) => {
    let data = {...doc.data()}
    commit('setCartProducts', data)

  });
});

},


wishlistProduct: async({commit, state}:{commit: Commit; state: State}) =>{

  const collectionRef = db.collection('WishlistProduct');
  collectionRef.onSnapshot((snapshot) => { 
    state.cartProducts = []
  snapshot.forEach((doc) => {
    let data = {...doc.data()}
    commit('WishlistProducts', data)



  });
});

},






increamentQuantity: async ({}, payload: {docId: string; quantity: number})=>{
  const docRef = db.collection('Cartproducts').doc(payload.docId);
  docRef.update({ quantit: payload.quantity+1});

},

decreamentQuantity: async ({}, payload: {docId: string; quantity: number})=>{
  const docRef = db.collection('Cartproducts').doc(payload.docId);
  docRef.update({ quantit: payload.quantity-1});

},
deleatQuantity: async ({}, payload:string)=>{

   db.collection("Cartproducts").doc(payload)
    .delete()
    .then(() => {
      console.log("Item successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing item: ", error);
    });

},

selectedCategoryBrandProduct: async ({commit}:{commit: Commit},  payload: {Category:any, Breand:any})=>{


  commit('CategoryBrandProduct' , payload )
 
},


selectedCategoryhomeProduct: async ({commit}:{commit: Commit},  payload: {Category:String, Brand:string})=>{


  commit('CategoryhomeProduct' , payload )
 
}




}