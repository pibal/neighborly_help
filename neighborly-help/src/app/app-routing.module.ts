import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './enums/routes.enum';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    canActivateChild: [AuthenticationGuard],
  },
  {
    path: RoutesEnum.Auth,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
