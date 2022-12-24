import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.http.getProducts().subscribe((res) => (this.productList = res));
  }
  addProduct(product: Product) {
    this.http.addProduct(product);
    this.ngOnInit();
    
    // alert(`added product: ${product.name} with amount: ${product.amount} !`);

    // TODO addProduct to cart
  }
}
