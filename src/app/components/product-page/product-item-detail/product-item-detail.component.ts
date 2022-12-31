import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Output() addedd: EventEmitter<Product> = new EventEmitter<Product>();

  id: number = 1;
  amount!: number;
  product!: Product;
  range: number[] = [...Array(10).keys()].map((data) => {
    return ++data;
  });

  constructor(private activeRoute: ActivatedRoute, private http: HttpService) {
    this.activeRoute.paramMap.subscribe((res) => {
      this.id = parseInt(res.get('id')!);
      this.product = this.http.getProductById(this.id)!;
      this.amount = 1;
    });
  }

  ngOnInit(): void {}

  addProduct() {
    this.product.id = this.id;
    this.product.amount = parseInt(this.amount.toString());
    this.http.addProduct(this.product);
  }
}
