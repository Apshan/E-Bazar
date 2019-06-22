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
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
var CartComponent = /** @class */ (function () {
    function CartComponent(productService, OrderService, router) {
        this.productService = productService;
        this.OrderService = OrderService;
        this.router = router;
        //productsList: product[];
        this.totalPrice = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.productService.getProductsAdded().subscribe(x=>this.productsList=x);
        this.productService.cartSubject.subscribe(function (x) {
            _this.data = x;
            console.log("inside cart");
            console.log(_this.data);
        });
        this.productService.getProductsAdded();
        this.updatePrice();
    };
    CartComponent.prototype.removeToCart1 = function (p) {
        console.log(p);
        this.data = this.data.filter(function (data) { return (data.product != data.product); });
        this.updatePrice();
    };
    CartComponent.prototype.removeQuatity = function (p) {
        this.data.forEach(function (itemQuantity) { return (itemQuantity.product == p && itemQuantity.quantity > 0) ? (itemQuantity.totalPrice = --itemQuantity.quantity * itemQuantity.product.price) : ""; });
        this.updatePrice();
    };
    CartComponent.prototype.addQuatity = function (p) {
        this.data.forEach(function (itemQuantity) { return (itemQuantity.product == p && itemQuantity.quantity < 10) ? (itemQuantity.totalPrice = ++itemQuantity.quantity * itemQuantity.product.price) : ""; });
        this.updatePrice();
    };
    CartComponent.prototype.updatePrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.data.forEach(function (foodQuantity) {
            _this.totalPrice += foodQuantity.totalPrice;
        });
        this.productService.updateCartSubject(this.data);
    };
    CartComponent.prototype.checkFun = function () {
        this.OrderService.checkOutFun(this.data);
        this.router.navigate(['/myOrders']);
    };
    CartComponent = __decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        }),
        __metadata("design:paramtypes", [ProductlistService,
            OrderService,
            Router])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map