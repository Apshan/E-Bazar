import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { product } from '../products';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CategorysortService } from './view-product/categorysort.service';

@Component({
  selector: 'app-view-product',
  providers:[CategorysortService],
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: product[];
  categorylist: string[];
  constructor(private productService: ProductlistService, private category: CategorysortService) { }

  ngOnInit() {
    this.getproductlist();
    this.getcategory();
  }
  getproductlist() {
    this.productService.getproductlistobservable().subscribe((p:product[]) => this.products = p);
    this.productService.getproductlist();
  }
  getcategory(){
    this.category.getcategory()
    .subscribe(hero => this.categorylist =hero);
  }
}
