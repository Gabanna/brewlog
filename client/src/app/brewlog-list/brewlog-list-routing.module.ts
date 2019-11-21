import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewlogListPage } from './brewlog-list.page';

const routes: Routes = [
  {
    path: '',
    component: BrewlogListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrewlogListPageRoutingModule {}
