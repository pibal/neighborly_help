import { NgModule } from '@angular/core';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AcceptedTaskListComponent } from './components/active-task-list';
import { SearchTaskComponent } from './containers/search-task';
import { TaskListComponent } from './components/task-list';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { NzLayoutModule, NzPageHeaderModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    OfferHelpPageRoutingModule,
    SharedModule,
    CommonModule,
    NzLayoutModule,
    NzPageHeaderModule,
  ],
  declarations: [
    TaskListComponent,
    AcceptedTasksComponent,
    SearchTaskComponent,
    AcceptedTaskListComponent,
  ],
})
export class OfferHelpPageModule {}
