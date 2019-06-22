
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';
import { HeadComponent } from './core modules/head/head.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/head',
  pathMatch: 'full'
   },
  { path: 'register', component: RegisterformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'head', component: HeadComponent },
  { path: 'head', component: HeadComponent },
  {path : 'cart', component : CartComponent},
  {path: 'myOrders', component: OrderhistoryComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }