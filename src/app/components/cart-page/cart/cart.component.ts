import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { UserInfo } from 'src/app/models/user-info';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [new Product()];
  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.http.getCart().subscribe((res) => (this.cart = res));
  }

  isEmpty(): boolean {
    return this.cart.length === 0;
  }

  updateCartAmount(product: Product) {
    this.http.updateAmount(product);
    alert(`${product.name} amount updated!`);
  }

  deleteProduct(product: Product) {
    this.http.deleteProduct(product);
    alert(`${product.name} removed from Cart`);
  }

  getSubtotal(): number {
    let subtotal = 0;
    for (let i of this.cart) subtotal += i.amount! * i.price;
    return subtotal;
  }

  submitOrder(info: UserInfo) {
    this.router.navigateByUrl(
      `/order/${info.fullname}/${this.getSubtotal().toFixed(2)}`
    );
    this.http.resetCart();
  }
}
