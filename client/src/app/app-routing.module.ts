import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'brewlog-list',
    pathMatch: 'full'
  },
  {
    path: 'brewlog-list',
    loadChildren: () => import('./brewlog-list/brewlog-list.module').then( m => m.BrewlogListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
