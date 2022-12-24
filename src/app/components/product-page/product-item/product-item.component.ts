import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() added: EventEmitter<Product> = new EventEmitter<Product>();
  amount: number = 1;
  range: number[] = [...Array(10).keys()].map((data) => {
    return ++data;
  });

  constructor() {
    this.product = new Product();
  }
  submitForm() {
    this.product.amount = parseInt(this.amount.toString());
    this.added.emit(this.product);
    // alert(
    //   `added product: ${this.product.name} with amount: ${this.product.amount} !`
    // );
    this.amount = 1;
  }
}
