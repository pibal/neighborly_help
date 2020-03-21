import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { NeedHelpPageRoutingModule } from './need-help-page-routing.module';
import { SubmittedTasksComponent } from './containers/submitted-tasks/submitted-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FirebaseModule } from '../../../firebase/firebase.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { LocalizationModule } from '../../localization/localization.module';
import { CreatedTaskListComponent } from './components/created-task-list/created-task-list.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    SubmittedTasksComponent,
    CreatedTaskListComponent,
  ],
  imports: [
    SharedModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
    NeedHelpPageRoutingModule,
    LocalizationModule,
  ],
})
export class NeedHelpPageModule {}
