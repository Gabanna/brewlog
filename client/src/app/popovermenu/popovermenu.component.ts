import { Component, OnInit } from '@angular/core';
import MenuItem from './menu-item';
import { NavParams } from '@ionic/angular';
import { AccountService } from '../security/account.service';
import { Account } from '../security/account.model';

@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.component.html',
  styleUrls: ['./popovermenu.component.scss'],
})
export class PopovermenuComponent implements OnInit {

  public menuItems: Array<MenuItem> = [];

  public user: Account;

  constructor(
    private accountService: AccountService,
    private navParams: NavParams
  ) {
    this.menuItems = this.navParams.get('menuItems');
  }

  ngOnInit() {
    this.accountService.getAccount().subscribe(account => {
      this.user = account;
    }, error => {
      console.error(error);
    });
  }

  onClick(menuItem: MenuItem) {}
}
