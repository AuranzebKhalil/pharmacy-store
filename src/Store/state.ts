import { computed } from "vue";
import type {
  cartProductsType,
  Populercata,
  Supplement,
  firebaseproducts,
  CurrentUser,
} from "../types";

export default {
  firebaseproducts: Array<firebaseproducts>(),
  user: {},
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
