import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class AuthenticationModule {}
