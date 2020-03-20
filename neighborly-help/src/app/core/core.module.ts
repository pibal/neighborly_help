import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule, NzMenuModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
  ],
})
export class CoreModule {}
