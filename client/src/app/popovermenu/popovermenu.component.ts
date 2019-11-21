import { Component, OnInit } from '@angular/core';
import MenuItem from './menu-item';
import { NavParams, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.scss'],
})
export class PopovermenuComponent {

  public menuItems: Array<MenuItem> = [];

  constructor(
    private navParams: NavParams
  ) {
    this.menuItems = this.navParams.get('menuItems');
  }

  onClick(menuItem: MenuItem) {}
}
