import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() userInfo: EventEmitter<UserInfo> = new EventEmitter<UserInfo>();
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  submitForm() {
    console.log(this.registerForm);
    this.userInfo.emit({
      fullname: this.fullname.getRawValue(),
      address: this.address.getRawValue(),
      credit_card: this.card_number.getRawValue(),
    });
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      card_number: ['', [Validators.required, Validators.pattern('.{16,}')]],
    });
  }

  getValidations(prop: AbstractControl) {
    return {
      'is-invalid': prop && prop.touched && prop.errors,
      'is-valid': prop && prop.valid,
    };
  }

  get fullname(): AbstractControl {
    return this.registerForm.get('fullname')!;
  }
  get address(): AbstractControl {
    return this.registerForm.get('address')!;
  }
  get card_number(): AbstractControl {
    return this.registerForm.get('card_number')!;
  }
}
