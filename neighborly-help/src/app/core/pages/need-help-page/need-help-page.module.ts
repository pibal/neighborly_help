import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { NeedHelpPageRoutingModule } from './need-help-page-routing.module';
import { SubmittedTasksComponent } from './containers/submitted-tasks/submitted-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FirebaseModule } from '../../../firebase/firebase.module';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [AddTaskComponent, SubmittedTasksComponent],
  imports: [
    SharedModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
    NeedHelpPageRoutingModule,
  ],
})
export class NeedHelpPageModule {}
