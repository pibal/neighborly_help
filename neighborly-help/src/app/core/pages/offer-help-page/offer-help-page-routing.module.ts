import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '../../../enums';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';
import { SearchTaskComponent } from './containers/offer-help';

const routes: Routes = [
  { path: '', redirectTo: RoutesEnum.OfferHelp_SearchTask },
  { path: RoutesEnum.OfferHelp_SearchTask, component: SearchTaskComponent },
  {
    path: RoutesEnum.OfferHelp_AcceptedTasks,
    component: AcceptedTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferHelpPageRoutingModule {}
