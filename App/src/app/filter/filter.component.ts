import { Component, OnInit } from '@angular/core';
import { productlist } from "../mock-productlist";

import { product } from '../products';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductlistService } from '../services/productlist.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  clothes: product[] = productlist;
  //form control. value change
 

  constructor(private productService : ProductlistService) { }

  ngOnInit() {
    this.changes()
  }

  namesearch = new FormGroup({
    categorySearch: new FormControl(''),
    minValue: new FormControl(100),
    maxValue: new FormControl(10000)
  })

  changes(): void {
    this.namesearch.valueChanges.subscribe(cat => {
      console.log(cat)
      this.productService.filterSearch(cat)
    });
  }

  //namesearch.get('categorySearch').valueChanges.subscribe((cat) => this.productService.filterSearch(cat)); 

  // filterSearch() {
  //   console.log(this.namesearch.value);
  // }
}

