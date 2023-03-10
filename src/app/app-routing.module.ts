import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { ConfirmationComponent } from './components/cart-page/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-page/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-page/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductItemDetailComponent },
  { path: 'order/:fullname/:total', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
