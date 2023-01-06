import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  pList: Product[];
  products: Product[] = [];
  cart: BehaviorSubject<Product[]>;

  constructor(private http: HttpClient) {
    this.pList = [];
    this.cart = new BehaviorSubject<Product[]>(this.pList);
    this.getProducts().subscribe((res) => (this.products = res));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((i) => i.id === id);
  }
  findProductIndexById(id: number): number {
    return this.pList.findIndex((i) => i.id === id);
  }

  updateAmount(product: Product): void {
    const i = this.findProductIndexById(product.id);
    if (i > -1) {
      this.pList[i].amount = product.amount;
    } else {
      this.addProduct(product);
    }
    this.updateCart();
  }
  deleteProduct(product: Product) {
    const i = this.pList.findIndex((i) => i.id === product.id);
    if (i > -1) {
      this.pList.splice(i, 1);
    } else {
      alert('Product doesnt exist');
    }
    this.updateCart();
  }
  addProduct(product: Product): void {
    const i = this.pList.findIndex((i) => i.id == product.id);

    if (i > -1) {
      if (this.pList[i].amount! + product.amount! > 10) {
        this.pList[i].amount = 10;
        alert('You cant add more than 10 items of the same product!');
      } else {
        this.pList[i].amount += product.amount!;
        alert(
          `Added ${product.amount} ${product.name} to your cart! for a total of ${this.pList[i].amount}`
        );
      }
    } else {
      this.pList.push(product);
      alert(`Added ${product.amount} ${product.name} to your cart!`);
    }
    this.updateCart();
  }

  getCart(): BehaviorSubject<Product[]> {
    return this.cart;
  }
  updateCart(): void {
    this.cart.next(this.pList);
  }
  resetCart() {
    this.pList = [];
    this.updateCart();
  }
}
