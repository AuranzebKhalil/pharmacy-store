export type State = {
  firebaseproducts: any;
  storeProduct : Array<any>
    SaleProduct : Array<any>
    cataProduct:Array<any>
    user: CurrentUser;
    BrandProduct:Array<any>
    cartProducts:Array<any>
    minmaxPrice:Array<any>
    hameburger:boolean,
    searchItem:boolean,
    storeSidebar:boolean,
    populercata:Array<Populercata>,
    Supplementcata:Array<Supplement>,
    wishlistproduct:Array<any>
    bodyLoader:boolean
    allproduct:Array<any>
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

export type CurrentUser = {
  email: string;
  userId: string;
}


export type firebaseproducts = {
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
  productId: string;
}


export type wishlisttype ={

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

  




