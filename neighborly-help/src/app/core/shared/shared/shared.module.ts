import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedListComponent } from './components/shared-list';
import { AgGridModule } from 'ag-grid-angular';
import {
  NzDescriptionsModule,
  NzGridModule,
  NzModalModule,
} from 'ng-zorro-antd';

@NgModule({
  declarations: [SharedListComponent],
  exports: [SharedListComponent],
  imports: [
    CommonModule,
    AgGridModule,
    NzModalModule,
    NzGridModule,
    NzDescriptionsModule,
  ],
})
export class SharedModule {}
