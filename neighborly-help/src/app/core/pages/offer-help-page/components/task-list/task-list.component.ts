import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../../../model/task/task';
import { PaginationList } from '../../../../shared/shared';
import {
  translateBoolean,
  translateTypeToPolish,
} from '../../../../shared/shared/utils';
import { ActivityType } from '../../../../../model/activity-type';
import { TaskState } from '../../../../../model/task/task-state';
import { TaskApi } from '../../../../../api/task-api';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'nh-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  task: Task;
  isVisible = false;
  activityType = ActivityType;
  taskState = TaskState;
  constructor(
    private service: TaskApi,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {}
  paginatedData: PaginationList;

  showModal($event: Task) {
    this.task = $event;
    this.isVisible = true;
  }
  handleOk(): void {
    this.service.accept(this.task.id).subscribe(() => {
      this.isVisible = false;
      this.notification.success('Przyjęto', 'Zgłoszenie przyjęte');
    });
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  @Input() set data(tasks: Task[]) {
    this.paginatedData = {
      data: tasks.map(value => {
        return this.mapTaskToListRow(value);
      }),
      totalElements: tasks.length,
    };
  }

  columnDef = [
    {
      headerName: 'Id',
      field: 'id',
      sortable: true,
      filter: true,
      width: 0,
    },
    {
      headerName: 'Rodzaj zadania',
      field: 'type',
      sortable: true,
      filter: true,
      width: 350,
    },
    {
      headerName: 'Adres',
      field: 'address',
      sortable: true,
      filter: true,
      width: 350,
    },
    {
      headerName: 'Zagrożenie',
      field: 'epidemicDanger',
      sortable: true,
      filter: true,
      width: 350,
    },
  ];

  private mapTaskToListRow(task: Task) {
    return {
      id: task.id,
      type: translateTypeToPolish(task.type),
      address: task.address.city + ' ' + task.address.street,
      epidemicDanger: translateBoolean(task.epidemicDanger),
      task: task,
    };
  }
}
