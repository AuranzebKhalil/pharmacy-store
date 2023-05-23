import { onMounted, reactive, ref } from "vue";
import type { cartProductsType, State, Populercata, wishlisttype } from "../types";

export default {
  setProduct(state: State, responseData: any) {

    state.storeProduct.push(responseData);
    state.allproduct.push(responseData)

  },


  supplementproduct(state: State, payload: Populercata) {



    state.populercata.push(payload);


  },
  catasupplement(state: State) {

    // onMounted(() => {

    // });
    let catagory = []

    catagory = state.storeProduct.filter((item: { catagory: string }) => item.catagory === "Supplements Vitamins")

    state.Supplementcata = catagory


  },


  MedicinesHerbs(state: State) {

    state.Supplementcata = []

    let catagory = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === "Supplements"
        )
      )
    );


    state.Supplementcata = catagory


  },


  Herbs(state: State) {

    let catagory = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === "Baby"
        )
      )
    );


    state.Supplementcata = catagory


  },





  SaleProduct(state: State, responseData: any) {
    let c = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { Sale: string }) => item.Sale === "Sale"
        )
      )
    );

    state.storeProduct = c

      ;
  },

  Catagory(state: State, responseData: String) {



    let b = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === responseData
        )
      )
    );


    state.storeProduct = b
  },

  brands(state: State, responseData: String) {
    let brands = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === responseData
        )
      )
    );

    state.storeProduct = brands

  },

  PriceData(state: State, payload: { min: number; max: number }) {
    let pro = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { Price: number }) =>
            item.Price >= payload.min && item.Price <= payload.max
        )
      )
    );


    state.storeProduct = pro

  },
  setCartProducts: (state: State, payload: cartProductsType) => {
    state.cartProducts.push(payload);



  },

  setwishlistProducts: (state: State, payload: wishlisttype) => {

    state.wishlistproduct.push(payload);

    console.log(payload, 'mutations')
  },


  CategoryBrandProduct: (state: State, payload: any) => {


    let Catagorys = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === payload.Category
        )
      )
    );



    let Brands = JSON.parse(
      JSON.stringify(
        Catagorys.filter(
          (item: { brand: string }) => item.brand === payload.Brand
        )
      )
    );
    state.storeProduct = Brands
  },


  HomeCategory: (state: State, payload: String) => {


    console.log(payload, 'lpoooooooooooooo')

    let Catagorys = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === payload
        )
      )
    )

    state.storeProduct = Catagorys


  },

  cartsproduct: (state: State, payload: String) => {
    state.cartProducts.push(payload)
    console.log(payload)
  },



  HomeBranbs: (state: State, payload: String) => {



    let homeBrands = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === payload
        )
      )
    )

    state.storeProduct = homeBrands


  },


  hamburger: (state: State, payload: boolean) => {


    state.hameburger = payload

    console.log('asdasd', state.hameburger)

  },


  Searchbars: (state: State, payload: boolean) => {


    state.searchItem = payload



  },
  featuredprojuct: (state: State) => {



    let data = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter((item: { brand: string }) => item.brand === "Mockup")
      )
    );

    state.BrandProduct = data

    //  console.log(data , 'oooooooooooooooooooooo')


  },



  storeSidebar: (state: State, payload: boolean) => {


    state.storeSidebar = payload



  },


  CategoryhomeProduct: (state: State, payload: any) => {



    let brands = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === payload.Brand
        )
      )
    );


    let allpro = JSON.parse(
      JSON.stringify(
        brands.filter(
          (item: { catagory: string }) => item.catagory === payload.Category
        )
      )
    );

    state.storeProduct = allpro








  }


}
