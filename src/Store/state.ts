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
  firebaseproducts:Array<firebaseproducts>(),

  ProductEdit:Array<Supplement>(),
  
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
  z: Array<Supplement>(),
  wishlistproduct: [],
  gifloader:false,


 activeItemId:false
};
