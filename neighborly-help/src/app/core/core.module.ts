import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonRoutingModule } from './core-routing.module';
import { SkeletonComponent } from './components/skeleton';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule, NzMenuModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    SkeletonRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
  ],
})
export class CoreModule {}
