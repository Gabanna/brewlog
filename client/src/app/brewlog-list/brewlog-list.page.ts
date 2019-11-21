import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopovermenuComponent } from '../popovermenu/popovermenu.component';
import MenuItem from '../popovermenu/menu-item';

@Component({
  selector: 'app-brewlog-list',
  templateUrl: './brewlog-list.page.html',
  styleUrls: ['./brewlog-list.page.scss'],
})
export class BrewlogListPage implements OnInit {

  private menu: Array<MenuItem> = [];

  constructor(
    private popoverCtl: PopoverController
  ) { }

  async ngOnInit() {
    this.menu = [
      {
        label: 'TITLE',
        icon: 'star'
      },
      {
        label: 'data',
        icon: 'star',
        langParam: {name: 'Kalle'}
      }
    ];
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtl.create({
      component: PopovermenuComponent,
      componentProps: {menuItems: this.menu},
      event: ev
    });
    return await popover.present();
  }
}
