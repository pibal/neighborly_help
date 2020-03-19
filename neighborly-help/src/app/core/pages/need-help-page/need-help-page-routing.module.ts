import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './containers/add-task/add-task.component';
import { SubmittedTasksComponent } from './containers/submitted-tasks/submitted-tasks.component';
import { RoutesEnum } from '../../../enums';

const routes: Routes = [
  { path: '', redirectTo: RoutesEnum.NeedHelp_AddTask },
  { path: RoutesEnum.NeedHelp_AddTask, component: AddTaskComponent },
  {
    path: RoutesEnum.NeedHelp_SubmittedTasks,
    component: SubmittedTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedHelpPageRoutingModule {}
