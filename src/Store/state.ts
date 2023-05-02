import { computed } from "vue";
import type { cartProductsType ,Populercata, Supplement, wishlist} from "../types";

export default {


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
    wishlistproduct:[]
}

