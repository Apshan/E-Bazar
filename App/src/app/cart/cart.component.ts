import { Component, OnInit } from '@angular/core';
import { product } from '../products';
import { ProductlistService } from '../services/productlist.service';
import { ProductQuantity } from './ProductQuantity';
import{OrderService} from '../services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //productsList: product[];
  totalPrice = 0;
  constructor(
    private productService: ProductlistService,
    private OrderService:OrderService,
    private router: Router,) { }
  data:ProductQuantity[]
  ngOnInit() {
    // this.productService.getProductsAdded().subscribe(x=>this.productsList=x);
    this.productService.cartSubject.subscribe(x=>{
      this.data=x;
      console.log("inside cart")
      console.log(this.data)
    });

   this.productService.getProductsAdded();
   this.updatePrice()
  }
removeToCart1(p:product){
  console.log(p)
  this.data = this.data.filter(data=>(data.product!=data.product));
  this.updatePrice()

}


removeQuatity(p:product){
  this.data.forEach(itemQuantity => (itemQuantity.product==p && itemQuantity.quantity>0)?(itemQuantity.totalPrice=--itemQuantity.quantity*itemQuantity.product.price):"");
  this.updatePrice();
}
addQuatity(p:product){
  this.data.forEach(itemQuantity => (itemQuantity.product==p && itemQuantity.quantity<10)?(itemQuantity.totalPrice=++itemQuantity.quantity*itemQuantity.product.price):"")
  this.updatePrice();
}
updatePrice(){
  this.totalPrice = 0;
  this.data.forEach(foodQuantity => {
    this.totalPrice += foodQuantity.totalPrice;
  })
  this.productService.updateCartSubject(this.data);
}  
checkFun(){
  this.OrderService.checkOutFun(this.data);
  this.router.navigate(['/myOrders'])
}
  
  }
  

