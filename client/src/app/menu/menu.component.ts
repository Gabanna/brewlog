import { Component, OnInit, Input } from '@angular/core';
import { PopovermenuComponent } from '@app/popovermenu/popovermenu.component';
import MenuItem from '@app/popovermenu/menu-item';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input()
  public items: Array<MenuItem> = [];

  constructor(
    private popoverCtl: PopoverController
  ) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverCtl.create({
      component: PopovermenuComponent,
      componentProps: {menuItems: this.items},
      event: ev
    });
    return await popover.present();
  }

}
