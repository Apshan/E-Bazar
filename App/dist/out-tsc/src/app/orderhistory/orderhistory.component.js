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
import { OrderService } from '../services/order.service';
var OrderhistoryComponent = /** @class */ (function () {
    function OrderhistoryComponent(orderService) {
        this.orderService = orderService;
    }
    OrderhistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.liveObservable.subscribe(function (data) { _this.liveorderlist = data; console.log(_this.liveorderlist); console.log("ABC"); });
        this.orderService.getLiveOrders();
    };
    OrderhistoryComponent = __decorate([
        Component({
            selector: 'app-orderhistory',
            templateUrl: './orderhistory.component.html',
            styleUrls: ['./orderhistory.component.css']
        }),
        __metadata("design:paramtypes", [OrderService])
    ], OrderhistoryComponent);
    return OrderhistoryComponent;
}());
export { OrderhistoryComponent };
//# sourceMappingURL=orderhistory.component.js.map