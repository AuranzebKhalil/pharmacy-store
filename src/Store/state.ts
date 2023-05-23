import { computed } from "vue";
import type { cartProductsType ,Populercata, Supplement} from "../types";

export default {

    allproduct:[],
    storeProduct : [] ,
    SaleProduct : [] ,
    cataProduct:[],
    BrandProduct:[],
    minmaxPrice :[],
    cartProducts: [],
    hameburger : false,
    searchItem: false,
    storeSidebar:false,
    populercata:Array<Populercata>(),
    Supplementcata:Array<Supplement>(),
    wishlistproduct:[],
    bodyLoader:false
}

