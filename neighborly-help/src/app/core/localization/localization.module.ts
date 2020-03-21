import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './component/map';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
    }),
  ],
})
export class LocalizationModule {}
