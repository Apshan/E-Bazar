import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterformComponent } from './registerform/registerform.component';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
// import { routes } from './app.routes';
import { from } from 'rxjs';
import { MatToolbarModule, MatSelectModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { FilterComponent } from './filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import { ViewProductComponent } from './view-product/view-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HeadComponent } from './core modules/head/head.component';
import { CartComponent } from '../app/cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
//import { CartComponent } from './cart/cart.component';

@NgModule({
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
    //CartComponent
    
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
export class AppModule { }