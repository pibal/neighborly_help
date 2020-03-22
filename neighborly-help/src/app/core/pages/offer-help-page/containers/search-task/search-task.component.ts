import { Component, OnInit } from '@angular/core';
import { TaskApi } from '../../../../../api/task-api';
import { Task } from 'src/app/model/task/task';
import { TaskState } from '../../../../../model/task/task-state';
import { AuthenticationService } from '../../../../../firebase/auth';

@Component({
  selector: 'nh-offer-help',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss'],
})
export class SearchTaskComponent implements OnInit {
  private allTasks: Task[] = [];

  constructor(
    private taskApi: TaskApi,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    // TODO use dedicated api function to filter
    this.taskApi
      .getAll()
      .subscribe(
        value =>
          (this.allTasks = value.filter(
            value =>
              (value.state === TaskState.REQUESTED ||
                value.state === TaskState.RESIGNED) &&
              value.creatorID !== this.authService.loggedUserId
          ))
      );
  }

  getOfferHelp(): Task[] {
    return this.allTasks;
  }
}
