var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterformComponent } from './registerform/registerform.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule, MatSelectModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { FilterComponent } from './filter/filter.component';
import { MatSliderModule } from '@angular/material/slider';
import { ViewProductComponent } from './view-product/view-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeadComponent } from './core modules/head/head.component';
import { CartComponent } from '../app/cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
//import { CartComponent } from './cart/cart.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                UserComponent,
                RegisterformComponent,
                FilterComponent,
                ViewProductComponent,
                HeaderComponent,
                HeadComponent,
                CartComponent,
                OrderComponent,
                OrderhistoryComponent,
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                CustomMaterialModule,
                FormsModule,
                AppRoutingModule,
                MatCheckboxModule,
                ReactiveFormsModule,
                MatRadioModule,
                // RouterModule.forRoot(routes),
                MatToolbarModule,
                MatSelectModule,
                MatSliderModule,
                MatDividerModule,
                MatButtonModule,
                FlexLayoutModule,
                MatAutocompleteModule
                // FlexLayoutModule.forRoot()
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map