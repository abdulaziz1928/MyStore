import { Component, EventEmitter, Output } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  fullname!: string;
  address!: string;
  card_number!: string;
  @Output() userInfo: EventEmitter<UserInfo> = new EventEmitter<UserInfo>();

  constructor() {}
  submitForm() {
    this.userInfo.emit({
      fullname: this.fullname,
      address: this.address,
      credit_card: this.card_number,
    });
  }
}
