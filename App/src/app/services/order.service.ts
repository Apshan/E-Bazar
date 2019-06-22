import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductQuantity } from '../cart/ProductQuantity';
import { Orders } from '../order/Orders';
import { Cart } from '../cart/cart';
// import { ORDERS } from './orderList';
// import { ProductQuantity } from './ProductQuantity';
// import { Cart } from 'src/app/cart';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
      //pastOrder:Order[];
      liveOrder:Orders[]
      ordersObservable: Subject<Orders[]>=new Subject<Orders[]>();
      liveObservable: Subject<Orders[]> = new Subject<Orders[]>();
    constructor() {
       // this.pastOrder=ORDERS.slice();
       this.liveOrder=[];
     }
     getOrders() {
        //this.ordersObservable.next(this.pastOrder);
      }
      checkOutFun(value:ProductQuantity[]){
      
        let order = new Orders();
        order.id = 1001;
        order.date = new Date();
          console.log(order.date);

        order.cart = this.getCartInstance(value);
        
        this.liveOrder.push(order)
        this.liveObservable.next(this.liveOrder)
        console.log(this.liveOrder)
        
       
         
      } 
      getLiveOrders(){
        this.liveObservable.next(this.liveOrder)
      }
      getCartInstance(itemQuantity:ProductQuantity[]):Cart{
        let cart = new Cart();
        cart.id = 103;
        cart.ProductQuantityList = itemQuantity;
        cart.grandTotal = 0;  
        itemQuantity.forEach(data => (cart.grandTotal += data.totalPrice));
        console.log(cart.grandTotal);

        return cart;
      }
  }