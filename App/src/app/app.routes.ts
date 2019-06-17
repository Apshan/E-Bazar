
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FilterComponent } from './filter/filter.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchComponent } from './search/search.component';
//import { ItemComponent } from './item/item.component';
//import { ItemListComponent } from './item-list/item-list.component';
export const routes: Routes = [
   
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
     
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterformComponent
      },
       {
         path: 'app-filter',
         pathMatch: 'full',
         component: FilterComponent
       },
       {
         path: 'app-view-product',
         pathMatch: 'full',
         component: ViewProductComponent
      },
      {
        path: 'app-search',
        pathMatch: 'full',
        component: SearchComponent
     },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
  ];