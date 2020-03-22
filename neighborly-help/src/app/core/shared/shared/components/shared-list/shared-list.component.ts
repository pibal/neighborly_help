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
import { Task } from '../../../../../model/task/task';

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

  @Output() sortingChanged: EventEmitter<any> = new EventEmitter();
  @Output() filterChanged: EventEmitter<any> = new EventEmitter();
  @Output() selectedTask = new EventEmitter<Task>();
  gridOptions: GridOptions = {
    pagination: true,
    accentedSort: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20, // you can have your custom page size
    paginationPageSize: 20, //pagesize
  };

  constructor() {}

  onCellClick($event: any) {
    this.selectedTask.emit($event.data.task);
  }

  onGridSortChanged = (event: SortChangedEvent) => {
    this.sortingChanged.emit(event.api.getSortModel());
  };

  onGridFilterChange = (event: FilterChangedEvent) => {
    this.filterChanged.emit(event.api.getFilterModel());
  };

  gridReady(event: GridReadyEvent) {
    this.gridApi = event.api;
    this.gridApi.columnController.setColumnVisible('id', false);
    this.gridApi.setDatasource(this.dataSource);
  }
}
