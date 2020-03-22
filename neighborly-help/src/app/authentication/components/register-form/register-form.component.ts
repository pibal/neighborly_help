import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/firebase/auth';
import { samePasswordValidator } from './util';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'nh-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnDestroy {
  formGroup: FormGroup;

  @Output() register = new EventEmitter<Credentials>();
  @Output() cancel = new EventEmitter();

  private unsub$ = new Subject();

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

    this.formGroup
      .get('password')
      .valueChanges.pipe(
        tap(_ =>
          this.formGroup
            .get('retype-password')
            .updateValueAndValidity({ emitEvent: false })
        ),
        takeUntil(this.unsub$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
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
