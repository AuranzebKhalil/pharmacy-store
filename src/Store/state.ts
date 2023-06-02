import { computed } from "vue";
import type {
  cartProductsType,
  Populercata,
  Supplement,
  firebaseproducts,
  CurrentUser,
  totalPrice
} from "../types";

export default {
  firebaseproducts: Array<firebaseproducts>(),
  totalPrice:Array<totalPrice>(),
  user:{},

  usereditdata:Array<Supplement>(),

  storeProduct: [],
  SaleProduct: [],
  cataProduct: [],
  BrandProduct: [],
  minmaxPrice: [],
  cartProducts: [],
  hameburger: false,
  searchItem: false,
  storeSidebar: false,
  populercata: Array<Populercata>(),
  Supplementcata: Array<Supplement>(),
  wishlistproduct: [],
  bodyLoader: false,
};
