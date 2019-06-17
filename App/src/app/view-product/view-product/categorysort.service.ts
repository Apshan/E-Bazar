import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productlist } from 'src/app/mock-productlist';


@Injectable({
  providedIn: 'root'
})
export class CategorysortService {

  constructor() { }
  getcategory(): Observable<string[]>{
    let cato:string[]=[];
 productlist.map(p=> {cato.push(p.name)
 })
return of(cato);
  }
}
