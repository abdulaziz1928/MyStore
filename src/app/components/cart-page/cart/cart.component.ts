import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  cart: Product[] = [new Product()];
  constructor(private http: HttpService) {
    
  }
  ngOnInit(): void {
    this.http.getCart().subscribe((res) => (this.cart = res));
  }

  isEmpty():boolean{
    return this.cart.length===0;
  }
  updateCartAmount(product:Product){
    //TO DO 
    alert('Updated!')
    this.http.updateAmount(product);
  }
  getSubtotal():number{
    let subtotal=0;
   for (let i of this.cart)
    subtotal+=i.amount!*i.price;
    return subtotal
   
  }
}
