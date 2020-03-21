import { Component, Input, OnInit } from '@angular/core';
import { PaginationList } from '../../../../shared/shared';
import { Task } from '../../../../../model/task/task';
import {
  translateBoolean,
  translateTypeToPolish,
} from '../../../../shared/shared/utils';
import { ActivityType } from '../../../../../model/activity-type';
import { TaskState } from '../../../../../model/task/task-state';
import { TaskApi } from '../../../../../api/task-api';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'nh-created-task-list',
  templateUrl: './created-task-list.component.html',
  styleUrls: ['./created-task-list.component.scss'],
})
export class CreatedTaskListComponent implements OnInit {
  task: Task;
  isVisible = false;
  activityType = ActivityType;
  taskState = TaskState;
  okTextButton: string;
  cancelTextButton: string;
  constructor(
    private service: TaskApi,
    private notification: NzNotificationService
  ) {}
  ngOnInit() {}
  paginatedData: PaginationList;

  @Input() set data(tasks: Task[]) {
    tasks = tasks || [];
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

  showModal($event: Task) {
    this.task = $event;
    if (this.task && this.task.state === TaskState.ACCEPTED) {
      this.okTextButton = 'Zakończono pomyślnie';
      this.cancelTextButton = 'Zakończono niepowozeniem';
    } else {
      this.okTextButton = 'Usuń';
      this.cancelTextButton = 'Anuluj';
    }
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.task && this.task.state === TaskState.ACCEPTED) {
      this.service.finishDone(this.task.id).subscribe(() => {
        this.isVisible = false;
        this.notification.success(
          'Zakończono pomyślnie',
          'Zgłoszenie zakończone pomyślnie'
        );
      });
    } else {
      this.service.delete(this.task.id).subscribe(() => {
        this.isVisible = false;
        this.notification.success(
          'Usunięto pomyślnie',
          'Zgłoszenie zostało usunięte'
        );
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  handleCancelDelete(): void {
    if (this.task && this.task.state === TaskState.ACCEPTED) {
      this.service.finishFail(this.task.id).subscribe(() => {
        this.isVisible = false;
        this.notification.success(
          'Zakończono niepowodzeniem',
          'Zgłoszenie zakończone niepowodzeniem'
        );
      });
    } else {
      this.service.cancel(this.task.id).subscribe(() => {
        this.isVisible = false;
        this.notification.success(
          'Pomyślnie anulowano',
          'Zgłoszenie zostało anulowane'
        );
      });
    }
  }

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
