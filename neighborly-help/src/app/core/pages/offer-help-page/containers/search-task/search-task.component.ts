import { Component, OnInit } from '@angular/core';
import { TaskApi } from '../../../../../api/task-api';
import { Task } from 'src/app/model/task/task';

@Component({
  selector: 'nh-offer-help',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
})
export class SearchTaskComponent implements OnInit {
  private allTasks: Task[] = [];

  constructor(private taskApi: TaskApi) {}

  ngOnInit() {
    this.taskApi.getAll().subscribe(value => (this.allTasks = value));
  }

  getOfferHelp(): Task[] {
    return this.allTasks;
  }
}
