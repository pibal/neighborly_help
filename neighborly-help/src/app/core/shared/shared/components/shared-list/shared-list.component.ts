import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FilterChangedEvent,
  GridOptions,
  GridReadyEvent,
  IDatasource,
  IGetRowsParams,
  SortChangedEvent,
} from 'ag-grid-community';
import { ColumnsDef, PaginationList } from '../..';
import { TaskApi } from '../../../../../api/task-api';
import { take } from 'rxjs/operators';
import { Task } from '../../../../../model/task/task';
import { ActivityType } from '../../../../../model/activity-type';
import { TaskState } from '../../../../../model/task/task-state';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'nh-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.scss'],
})
export class SharedListComponent {
  dataSource: IDatasource;

  @Input() set rowData(data: PaginationList) {
    this.dataSource = {
      getRows: (params: IGetRowsParams) => {
        params.successCallback(data.data, data.totalElements);
      },
    };
    if (this.gridApi) {
      this.gridApi.setDatasource(this.dataSource);
    }
  }

  @Input() columnDefs: ColumnsDef[];

  private gridApi;
  task: Task;
  isVisible = false;
  activityType = ActivityType;
  taskState = TaskState;

  @Output() sortingChanged: EventEmitter<any> = new EventEmitter();
  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  gridOptions: GridOptions = {
    pagination: true,
    accentedSort: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20, // you can have your custom page size
    paginationPageSize: 20, //pagesize
  };

  constructor(
    private service: TaskApi,
    private notification: NzNotificationService
  ) {}

  onCellClick($event: any) {
    this.service
      .get($event.id)
      .pipe(take(1))
      .subscribe(val => {
        this.task = val;
        this.isVisible = true;
      });
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

  onGridSortChanged = (event: SortChangedEvent) => {
    //console.log(event.api.getSortModel());
    this.sortingChanged.emit(event.api.getSortModel());
  };

  onGridFilterChange = (event: FilterChangedEvent) => {
    //console.log(event.api.getFilterModel());
    this.filterChanged.emit(event.api.getFilterModel());
  };

  gridReady(event: GridReadyEvent) {
    this.gridApi = event.api;
    this.gridApi.columnController.setColumnVisible('id', false);
    this.gridApi.setDatasource(this.dataSource);
  }
}
