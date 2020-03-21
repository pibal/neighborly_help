import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { NeedHelpPageRoutingModule } from './need-help-page-routing.module';
import { SubmittedTasksComponent } from './containers/submitted-tasks/submitted-tasks.component';

@NgModule({
  declarations: [AddTaskComponent, SubmittedTasksComponent],
  imports: [CommonModule, NeedHelpPageRoutingModule],
})
export class NeedHelpPageModule {}
