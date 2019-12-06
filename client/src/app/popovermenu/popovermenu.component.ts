import { Component, OnInit } from '@angular/core';
import MenuItem from './menu-item';
import { NavParams, LoadingController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.scss'],
})
export class PopovermenuComponent {

  public menuItems: Array<MenuItem> = [];

  constructor(
    private firebase: FirebaseService,
    private navParams: NavParams
  ) {
    this.menuItems = this.navParams.get('menuItems');
  }

  onClick(menuItem: MenuItem) {}

  logout(): void {
    this.firebase.logout();
  }
}
