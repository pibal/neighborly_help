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
        //should provide data from server;
        params.successCallback(data.data, data.totalElements);
      },
    };
  }

  @Input() columnDefs: ColumnsDef[];

  private gridApi;

  @Output() sortingChanged: EventEmitter<any> = new EventEmitter();
  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20, // you can have your custom page size
    paginationPageSize: 20, //pagesize
  };

  constructor() {}

  onCellClick($event: any) {
    //console.log($event.data);
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
