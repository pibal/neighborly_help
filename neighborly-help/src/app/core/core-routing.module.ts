import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './components';
import { RoutesEnum } from 'src/app/enums/routes.enum';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: `/${RoutesEnum.OfferHelp}`,
      },
      {
        path: RoutesEnum.OfferHelp,
        loadChildren: () =>
          import('./pages/offer-help-page/offer-help-page.module').then(
            m => m.OfferHelpPageModule
          ),
      },
      {
        path: RoutesEnum.NeedHelp,
        loadChildren: () =>
          import('./pages/need-help-page/need-help-page.module').then(
            m => m.NeedHelpPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletonRoutingModule {}
