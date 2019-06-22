var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { productlist } from '../mock-productlist';
var ProductlistService = /** @class */ (function () {
    function ProductlistService() {
        //SearchedProductList: any;
        this.tempList = [];
        this.productsAdded = [];
        this.productSubject = new Subject();
        this.cartSubject = new Subject();
    }
    ProductlistService.prototype.getproductlistobservable = function () {
        return this.productSubject;
    };
    ProductlistService.prototype.getproductlist = function () {
        this.productSubject.next(productlist);
    };
    ProductlistService.prototype.SearchedProductList = function (SearchValue) {
        console.log(SearchValue, productlist);
        var filteredData = [];
        filteredData = productlist.filter(function (data) { return data.name === SearchValue.search; });
        console.log(filteredData);
        this.productSubject.next(filteredData);
    };
    ProductlistService.prototype.filterSearch = function (value) {
        console.log(value);
        this.tempList = productlist.filter(function (p) { return p.price >= value.minValue; });
        console.log(this.tempList);
        if (value.categorySearch !== "") {
            this.tempList = this.tempList.filter(function (p) { return p.category === value.categorySearch; });
        }
        console.log(this.tempList);
        this.productSubject.next(this.tempList);
    };
    ProductlistService.prototype.addToCart = function (p) {
        //Create an observable so that newly added products will be notified in cart.component Observable.of(this.productsAdded);
        console.log(p);
        this.productsAdded.push({ product: p, quantity: 1, totalPrice: p.price });
        this.cartSubject.next(this.productsAdded);
        console.log(this.productsAdded);
    };
    ProductlistService.prototype.getProductsAdded = function () {
        //return that newly created observable in the previous step
        this.cartSubject.next(this.productsAdded);
    };
    ProductlistService.prototype.updateCartSubject = function (data) {
        this.tempList = data;
        console.log(data);
        this.cartSubject.next(this.tempList);
        this.cartSubject.forEach(function (data) { return console.log(data); });
    };
    ProductlistService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductlistService);
    return ProductlistService;
}());
export { ProductlistService };
//# sourceMappingURL=productlist.service.js.map