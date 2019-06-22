import { Component } from '@angular/core';
import {ProductlistService } from './services/productlist.service'
import { product } from './products';
import { ProductQuantity } from './cart/ProductQuantity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E`BAZAAR';
  data: ProductQuantity[]=[];
  constructor(private prodSevr:ProductlistService){
    
  }

  ngOnInit() {
    this.prodSevr.cartSubject.subscribe(x=>{
      this.data=x;
      console.log(this.data)
    })
  }
 
}