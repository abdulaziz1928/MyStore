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

  updateAmount(product: Product): void {
    const i = this.pList.findIndex((i) => i.id === product.id);
    this.pList[i].amount = product.amount;
    this.cart.next(this.pList);
  }

  addProduct(product: Product): void {
    const i = this.pList.findIndex((i) => i.id === product.id);

    if (i > -1) {
      if (this.pList[i].amount! + product.amount! > 10) {
        this.pList[i].amount = 10;
        this.cart.next(this.pList);
        alert('you cant add more than 10 items of the same product!');
      } else {
        let t1 = this.pList[i].amount!;
        this.pList[i].amount! += parseInt(product.amount!.toString());
        let t2 = this.pList[i].amount!;
        alert(`${t1}  ${t2}`);
        this.cart.next(this.pList);
      }
    } else {
      this.pList.push(product);
      this.cart.next(this.pList);
    }
  }

  // getCart(): Product[] {
  //   return this.pList;
  // }
  getCart(): BehaviorSubject<Product[]> {
    return this.cart;
  }
}
