import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit{
  @Input() product: Product;
  @Output() updated:EventEmitter<Product> = new EventEmitter<Product>();
  amount:number=-1;
  range: number[] = [...Array(10).keys()].map((data) => {
    return ++data;
  });

  constructor() {
    this.product = new Product();
  }
  ngOnInit(): void {
    this.amount=this.product.amount!;
  }
  
  amountChanged(){
    this.product.amount=parseInt(this.amount.toString())
    this.updated.emit(this.product)
  }
}
