import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../../model/task/task';
import { TaskApi } from '../../../../../api/task-api';
import { TaskState } from '../../../../../model/task/task-state';

@Component({
  selector: 'nh-accepted-tasks',
  templateUrl: './accepted-tasks.component.html',
  styleUrls: ['./accepted-tasks.component.scss'],
})
export class AcceptedTasksComponent implements OnInit {
  private allTasks: Task[] = [];

  constructor(private taskApi: TaskApi) {}

  ngOnInit() {
    this.taskApi.getAll().subscribe(value => (this.allTasks = value));
  }

  getOfferHelp(): Task[] {
    return this.allTasks.filter(value => value.state === TaskState.ACCEPTED);
  }
}
