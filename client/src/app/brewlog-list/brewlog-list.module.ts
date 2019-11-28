import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrewlogListPageRoutingModule } from './brewlog-list-routing.module';

import { BrewlogListPage } from './brewlog-list.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrewlogListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BrewlogListPage]
})
export class BrewlogListPageModule {}
