import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CarttotalComponent } from './carttotal/carttotal.component';

const routes: Routes = [
  {path:'cart', component:CartComponent},
  {path:'carttotal', component:CarttotalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
