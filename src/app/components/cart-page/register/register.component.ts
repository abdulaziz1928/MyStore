import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  fullname: string = '';
  address: string = '';
  card_number: string = '';
  constructor(){}
  submitForm(){}
}
