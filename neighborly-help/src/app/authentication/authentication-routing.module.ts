import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers';
import { RegisterComponent } from './containers/register/register.component';
import { RoutesEnum } from '../enums';

const routes: Routes = [
  {
    path: RoutesEnum.Login,
    component: LoginComponent,
  },
  {
    path: RoutesEnum.Register,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
