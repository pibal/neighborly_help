import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTaskComponent } from './containers/search-task';

const routes: Routes = [{ path: '', component: SearchTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferHelpPageRoutingModule {}
