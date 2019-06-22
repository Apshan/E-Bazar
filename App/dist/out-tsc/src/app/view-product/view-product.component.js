var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { CategorysortService } from './view-product/categorysort.service';
var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(productService, category) {
        this.productService = productService;
        this.category = category;
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        this.getproductlist();
        this.getcategory();
    };
    ViewProductComponent.prototype.getproductlist = function () {
        var _this = this;
        this.productService.getproductlistobservable().subscribe(function (p) { return _this.products = p; });
        this.productService.getproductlist();
    };
    ViewProductComponent.prototype.getcategory = function () {
        var _this = this;
        this.category.getcategory()
            .subscribe(function (hero) { return _this.categorylist = hero; });
    };
    ViewProductComponent.prototype.addToCart = function (p) {
        console.log(p);
        this.productService.addToCart(p);
    };
    ViewProductComponent = __decorate([
        Component({
            selector: 'app-view-product',
            providers: [CategorysortService],
            templateUrl: './view-product.component.html',
            styleUrls: ['./view-product.component.css']
        }),
        __metadata("design:paramtypes", [ProductlistService, CategorysortService])
    ], ViewProductComponent);
    return ViewProductComponent;
}());
export { ViewProductComponent };
//# sourceMappingURL=view-product.component.js.map