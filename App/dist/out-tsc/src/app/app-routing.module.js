var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HeadComponent } from './core modules/head/head.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
var routes = [
    { path: '',
        redirectTo: '/head',
        pathMatch: 'full'
    },
    { path: 'register', component: RegisterformComponent },
    { path: 'login', component: LoginComponent },
    { path: 'head', component: HeadComponent },
    { path: 'head', component: HeadComponent },
    { path: 'cart', component: CartComponent },
    { path: 'myOrders', component: OrderhistoryComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [
                RouterModule
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map