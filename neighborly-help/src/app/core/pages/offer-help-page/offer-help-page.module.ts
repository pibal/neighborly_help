import { NgModule } from '@angular/core';
import { SearchTaskComponent } from './containers/search-task';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list';
import { SharedModule } from '../../shared/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd';
import { ActiveTaskListComponent } from './components/active-task-list';

@NgModule({
  imports: [
    OfferHelpPageRoutingModule,
    SharedModule,
    CommonModule,
    NzLayoutModule,
  ],
  declarations: [
    TaskListComponent,
    SearchTaskComponent,
    ActiveTaskListComponent,
  ],
  exports: [TaskListComponent],
})
export class OfferHelpPageModule {}
