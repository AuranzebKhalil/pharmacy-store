export type State = {
  storeProduct : Array<any>
    SaleProduct : Array<any>
    cataProduct:Array<any>
    BrandProduct:Array<any>
    cartProducts:Array<any>
    minmaxPrice:Array<any>
    hameburger:boolean,
    searchItem:boolean,
    storeSidebar:boolean,
    populercata:Array<Populercata>
    Supplementcata:Array<Supplement>
    wishlistproduct:Array<wishlist>
}


export type Supplement = {
  Price: string;
  Rating: string;
  Sale: string;
  brand: string;
  catagory: string;
  name: string;
  url: string;
};


export type AllProducts = {
  Price: string;
  Rating: string;
  Sale: string;
  brand: string;
  catagory: string;
  name: string;
  url: string;
};

export type cartProductsType ={
  rating: string;
  name: string;
  price: number;
  quantit: number;
  uId: string;
  url: string;
}


export type wishlist ={

  rating: string;
  name: string;
  price: number;
  quantit: number;
  uId: string;
  url: string;

}

export type BrandCategoryProduct ={

  Category:string,
  Brand:string

}


export type Populercata ={

  Price: string;
  Rating: string;
  Sale: string;
  brand: string;
  catagory: string;
  name: string;
  url: string;

}

  




