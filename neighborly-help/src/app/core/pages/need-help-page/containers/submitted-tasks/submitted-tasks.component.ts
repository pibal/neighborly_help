import { Component, OnInit } from '@angular/core';
import { TaskApi } from '../../../../../api/task-api';
import { Task } from '../../../../../model/task/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'nh-submitted-tasks',
  templateUrl: './submitted-tasks.component.html',
  styleUrls: ['./submitted-tasks.component.scss'],
})
export class SubmittedTasksComponent implements OnInit {
  myTasks: Observable<Task[]>;

  constructor(private taskApi: TaskApi) {}

  ngOnInit() {
    this.myTasks = this.taskApi.getAll();
  }
}
