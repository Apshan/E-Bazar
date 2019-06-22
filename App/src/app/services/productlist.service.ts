import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { productlist } from '../mock-productlist';
import { product } from '../products';
import { ProductQuantity } from '../cart/ProductQuantity';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  namesearch: any;
  //SearchedProductList: any;
  tempList=[];
  productsAdded: ProductQuantity[]=[];
  establishSubject: any;
  constructor() { }
  
  productSubject: Subject<product[]> = new Subject<product[]>();
  cartSubject: Subject<ProductQuantity[]> = new Subject<ProductQuantity[]>();
  getproductlistobservable(): Subject<product[]> {
    return this.productSubject
  }


  getproductlist() {
    this.productSubject.next(productlist);
  }
  SearchedProductList(SearchValue) {
    console.log(SearchValue,productlist)
    let filteredData=[];
    filteredData = productlist.filter( data => data.name === SearchValue.search)
    console.log(filteredData)
    this.productSubject.next(filteredData);
    
  }
 

  filterSearch(value: any) {
   
    console.log(value)
    this.tempList = productlist.filter(p => p.price >= value.minValue)
    console.log(this.tempList)
    if (value.categorySearch!=="") {
      this.tempList = this.tempList.filter(p => p.category === value.categorySearch)
    }
    console.log(this.tempList)
    this.productSubject.next(this.tempList);
   }
   
   addToCart(p: product) {
    //Create an observable so that newly added products will be notified in cart.component Observable.of(this.productsAdded);
    console.log(p)
    this.productsAdded.push({product:p,quantity:1,totalPrice:p.price});
    this.cartSubject.next(this.productsAdded);
    console.log(this.productsAdded)
   }
   
   getProductsAdded() {
     //return that newly created observable in the previous step
     this.cartSubject.next(this.productsAdded);
   }
  
   updateCartSubject(data){
    this. tempList = data;
   console.log(data)
    this.cartSubject.next(this.tempList);
    this.cartSubject.forEach(data=>console.log(data));
  }
   
}
