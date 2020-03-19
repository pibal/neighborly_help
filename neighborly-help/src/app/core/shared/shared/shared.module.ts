import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedListComponent } from './components/shared-list';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [SharedListComponent],
  exports: [SharedListComponent],
  imports: [CommonModule, AgGridModule],
})
export class SharedModule {}
