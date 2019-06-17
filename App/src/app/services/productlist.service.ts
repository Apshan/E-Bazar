import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { productlist } from '../mock-productlist';
import { product } from '../products';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  namesearch: any;

  constructor() { }

  productSubject: Subject<product[]> = new Subject<product[]>();

  getproductlistobservable(): Subject<product[]> {
    return this.productSubject
  }


  getproductlist() {
    this.productSubject.next(productlist);
  }

  filterSearch(value: string) {
    let tempList
    console.log(value)
    if (value) {
      tempList = productlist
        //.map(group => ({ letter: group.letter, category: filter(group.category, value) }))
        .filter(p => p.category === value)
    }
    console.log(tempList)
    this.productSubject.next(tempList);
  }
}
