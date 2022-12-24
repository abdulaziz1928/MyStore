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

  id: number = -1;
  amount: number;
  product: Product = new Product();
  range: number[] = [...Array(10).keys()].map((data) => {
    return ++data;
  });

  constructor(private activeRoute: ActivatedRoute, private http: HttpService) {
    this.activeRoute.params.subscribe((res) => {
      this.id = parseInt(res['id'].toString());
      this.product = this.http.getProductById(this.id)!;
    });
    this.amount = 1;
  }
  ngOnInit(): void {}
  addProduct() {
    // this.addedd.emit(product);
    this.product.amount = parseInt(this.amount.toString());
    alert(this.product.amount)
    this.http.addProduct(this.product);
    this.amount = 1;
  }
}
