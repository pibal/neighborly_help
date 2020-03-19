import { NgModule } from '@angular/core';
import { SearchTaskComponent } from './containers/offer-help';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/offer-list';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [OfferHelpPageRoutingModule, SharedModule, CommonModule],
  declarations: [TaskListComponent, SearchTaskComponent],
  exports: [TaskListComponent],
})
export class OfferHelpPageModule {}
