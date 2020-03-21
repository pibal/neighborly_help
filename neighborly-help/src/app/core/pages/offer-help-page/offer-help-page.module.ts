import { NgModule } from '@angular/core';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AcceptedTaskListComponent } from './components/active-task-list';
import { SearchTaskComponent } from './containers/search-task';
import { TaskListComponent } from './components/task-list';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import {
  NzDescriptionsModule,
  NzGridModule,
  NzLayoutModule,
  NzModalModule,
  NzPageHeaderModule,
} from 'ng-zorro-antd';
import { LocalizationModule } from '../../localization/localization.module';

@NgModule({
  imports: [
    OfferHelpPageRoutingModule,
    SharedModule,
    CommonModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzGridModule,
    NzModalModule,
    LocalizationModule,
  ],
  declarations: [
    TaskListComponent,
    AcceptedTasksComponent,
    SearchTaskComponent,
    AcceptedTaskListComponent,
  ],
})
export class OfferHelpPageModule {}
