import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  name!: string;
  total!: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((res) => {
      this.name = res.get('fullname')!;
      this.total = parseFloat(res.get('total')!).toFixed(2);
    });
  }
}
