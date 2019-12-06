import { Component, OnInit } from '@angular/core';
import MenuItem from './menu-item';
import { NavParams, LoadingController } from '@ionic/angular';
import { FirebaseService } from '@app/firebase.service';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.scss'],
})
export class PopovermenuComponent implements OnInit {

  public menuItems: Array<MenuItem> = [];

  public user: firebase.User;

  constructor(
    private firebase: FirebaseService,
    private navParams: NavParams
  ) {
    this.menuItems = this.navParams.get('menuItems');
  }

  ngOnInit() {
    this.user = this.firebase.userInfo();
  }

  onClick(menuItem: MenuItem) {}

  logout(): void {
    this.firebase.logout();
  }
}
