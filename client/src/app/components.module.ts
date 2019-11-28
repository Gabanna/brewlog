import { NgModule } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { PopovermenuComponent } from '@app/popovermenu/popovermenu.component';
import { MenuComponent } from '@app/menu/menu.component';
import { HeaderComponent } from '@app/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule.forRoot()
  ],
  declarations: [
    PopovermenuComponent,
    MenuComponent,
    HeaderComponent
  ],
  entryComponents: [
    PopovermenuComponent
  ],
  exports: [
    PopovermenuComponent,
    TranslateModule,
    MenuComponent,
    HeaderComponent
  ],
})
export class ComponentsModule {}
