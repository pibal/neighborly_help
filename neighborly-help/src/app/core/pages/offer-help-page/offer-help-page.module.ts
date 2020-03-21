import { NgModule } from '@angular/core';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';
import { TaskListComponent } from './components/offer-list';
import { SharedModule } from '../../shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SearchTaskComponent } from './containers/offer-help';

@NgModule({
  imports: [OfferHelpPageRoutingModule, SharedModule, CommonModule],
  declarations: [
    TaskListComponent,
    AcceptedTasksComponent,
    SearchTaskComponent,
  ],
})
export class OfferHelpPageModule {}
