import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/firebase/auth';
import { samePasswordValidator } from './util';

@Component({
  selector: 'nh-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  formGroup: FormGroup;

  @Output() register = new EventEmitter<Credentials>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      'retype-password': [
        null,
        [
          Validators.required,
          samePasswordValidator('password'),
          Validators.minLength(6),
        ],
      ],
    });
  }

  onRegister() {
    this.register.emit({
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
    });
  }

  onCancel() {
    this.cancel.emit();
  }
}
