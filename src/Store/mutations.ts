import { onMounted, reactive, ref } from "vue";
import type {
  cartProductsType,
  State,
  Populercata,
  wishlisttype,
  CurrentUser,
} from "../types";

export default {
  SET_USER(state: State, user: CurrentUser) {
    state.user = user;
  },

  setProduct(state: State, responseData: any) {
    state.storeProduct.push(responseData);
    state.firebaseproducts.push(responseData);
  },

  supplementproduct(state: State, payload: Populercata) {
    state.populercata.push(payload);
  },
  catasupplement(state: State) {
    // onMounted(() => {

    // });
    let catagory = [];

    catagory = state.storeProduct.filter(
      (item: { catagory: string }) => item.catagory === "Supplements"
    );

    state.Supplementcata = catagory;
  },

  MedicinesHerbs(state: State) {
    state.Supplementcata = [];

    let catagory = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) =>
            item.catagory === "Supplements Vitamins"
        )
      )
    );

    state.Supplementcata = catagory;
  },

  Herbs(state: State) {
    let catagory = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === "Herbs"
        )
      )
    );

    state.Supplementcata = catagory;
  },

  SaleProduct(state: State, responseData: any) {
    let c = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { Sale: string }) => item.Sale === "Sale"
        )
      )
    );

    state.storeProduct = c;
  },

  Catagory(state: State, responseData: String) {
    state.storeProduct = [];

    let b = JSON.parse(
      JSON.stringify(
        state.firebaseproducts.filter(
          (item: { catagory: string }) => item.catagory === responseData
        )
      )
    );

    state.storeProduct = b;
  },

  brands(state: State, responseData: String) {
    let brands = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === responseData
        )
      )
    );

    state.storeProduct = brands;
  },

  total(state: State, payload:any) {

    state.totalPrice = []

  state.totalPrice.push(payload)


  console.log(state.totalPrice, 'asdasd')


  },


  editdata(state: State, payload:any) {



  state.usereditdata.push(payload)


 


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

    state.storeProduct = pro;
  },
  setCartProducts: (state: State, payload: cartProductsType) => {
    state.cartProducts.push(payload);
  },

  setwishlistProducts: (state: State, payload: wishlisttype) => {
    state.wishlistproduct.push(payload);
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
    state.storeProduct = Brands;
  },

  HomeCategory: (state: State, payload: String) => {
    console.log(payload, "lpoooooooooooooo");

    let Catagorys = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { catagory: string }) => item.catagory === payload
        )
      )
    );

    state.storeProduct = Catagorys;
  },

  cartsproduct: (state: State, payload: String) => {
    state.cartProducts.push(payload);
    console.log(payload);
  },

  HomeBranbs: (state: State, payload: String) => {
    let homeBrands = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === payload
        )
      )
    );

    state.storeProduct = homeBrands;
  },

  hamburger: (state: State, payload: boolean) => {
    state.hameburger = payload;
  },

  Searchbars: (state: State, payload: boolean) => {
    state.searchItem = payload;
  },
  featuredprojuct: (state: State) => {
    let data = JSON.parse(
      JSON.stringify(
        state.storeProduct.filter(
          (item: { brand: string }) => item.brand === "Mockup"
        )
      )
    );

    state.BrandProduct = data;

    //  console.log(data , 'oooooooooooooooooooooo')
  },

  storeSidebar: (state: State, payload: boolean) => {
    state.storeSidebar = payload;
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

    state.storeProduct = allpro;
  },
};
