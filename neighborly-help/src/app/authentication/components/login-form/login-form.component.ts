import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/firebase/auth';

@Component({
  selector: 'nh-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  formGroup: FormGroup;

  @Output() login = new EventEmitter<Credentials>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onLogin() {
    this.login.emit({
      username: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
    });
  }
}
