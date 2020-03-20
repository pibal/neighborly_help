import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [ModalComponent],
})
export class ModalModule {}
