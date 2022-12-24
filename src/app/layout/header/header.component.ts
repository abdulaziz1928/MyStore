import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems: number = 0;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getCart().subscribe((res) => (this.cartItems = res.length));
  }
}
