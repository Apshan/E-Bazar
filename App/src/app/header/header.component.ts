import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductlistService } from '../services/productlist.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      title:String = 'E`BAZAR';
      SearchValue : String;
      searchListArray=[];
    searchForm : FormGroup;
    
  constructor(private productService: ProductlistService) { }

  ngOnInit() {
    this.searchForm= new FormGroup({
      search : new FormControl('')
    })
   
  }
  searchItem(){
    //  this.productService.SearchedProductList(this.searchForm.value.search);
    
      this.productService.SearchedProductList(this.searchForm.value)


  }

}
