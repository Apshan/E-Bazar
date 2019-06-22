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
import { Orders } from '../order/Orders';
import { Cart } from '../cart/cart';
// import { ORDERS } from './orderList';
// import { ProductQuantity } from './ProductQuantity';
// import { Cart } from 'src/app/cart';
var OrderService = /** @class */ (function () {
    function OrderService() {
        this.ordersObservable = new Subject();
        this.liveObservable = new Subject();
        // this.pastOrder=ORDERS.slice();
        this.liveOrder = [];
    }
    OrderService.prototype.getOrders = function () {
        //this.ordersObservable.next(this.pastOrder);
    };
    OrderService.prototype.checkOutFun = function (value) {
        var order = new Orders();
        order.id = 1001;
        order.date = new Date();
        console.log(order.date);
        order.cart = this.getCartInstance(value);
        this.liveOrder.push(order);
        this.liveObservable.next(this.liveOrder);
        console.log(this.liveOrder);
    };
    OrderService.prototype.getLiveOrders = function () {
        this.liveObservable.next(this.liveOrder);
    };
    OrderService.prototype.getCartInstance = function (itemQuantity) {
        var cart = new Cart();
        cart.id = 103;
        cart.ProductQuantityList = itemQuantity;
        cart.grandTotal = 0;
        itemQuantity.forEach(function (data) { return (cart.grandTotal += data.totalPrice); });
        console.log(cart.grandTotal);
        return cart;
    };
    OrderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map