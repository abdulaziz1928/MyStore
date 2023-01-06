import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CartComponent } from './components/cart-page/cart/cart.component';
import { CartItemComponent } from './components/cart-page/cart-item/cart-item.component';
import { ConfirmationComponent } from './components/cart-page/confirmation/confirmation.component';
import { ProductItemComponent } from './components/product-page/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-page/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-page/product-list/product-list.component';
import { RegisterComponent } from './components/cart-page/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent,
    CartItemComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
