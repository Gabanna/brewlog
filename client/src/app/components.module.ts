import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PopovermenuComponent } from './popovermenu/popovermenu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule.forRoot()
  ],
  declarations: [
    PopovermenuComponent
  ],
  entryComponents: [
    PopovermenuComponent
  ],
  exports: [PopovermenuComponent, TranslateModule],
})
export class ComponentsModule {}
