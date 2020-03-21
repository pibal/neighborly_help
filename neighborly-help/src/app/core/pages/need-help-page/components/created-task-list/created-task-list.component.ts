import { Component, Input, OnInit } from '@angular/core';
import { PaginationList } from '../../../../shared/shared';
import { Task } from '../../../../../model/task/task';
import {
  translateBoolean,
  translateTypeToPolish,
} from '../../../../shared/shared/utils';

@Component({
  selector: 'nh-created-task-list',
  templateUrl: './created-task-list.component.html',
  styleUrls: ['./created-task-list.component.scss'],
})
export class CreatedTaskListComponent implements OnInit {
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

  private mapTaskToListRow(task: Task) {
    return {
      id: task.id,
      type: translateTypeToPolish(task.type),
      address: task.address.city + ' ' + task.address.street,
      epidemicDanger: translateBoolean(task.epidemicDanger),
    };
  }
}
