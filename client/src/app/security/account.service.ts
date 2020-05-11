import { Injectable } from '@angular/core';
import { DeviceAccounts } from '@ionic-native/device-accounts/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account: Account;
  private isAndroid: boolean;

  constructor(platform: Platform, private deviceAccount: DeviceAccounts) {
    this.isAndroid = platform.is('android');
  }

  public getAccount(): Observable<Account> {
    return new Observable<Account>(observer => {
      if (!this.account) {
        if (this.isAndroid) {
          this.deviceAccount.getByType('com.google').then(accounts => {
            console.debug(accounts);
            this.account = new Account(accounts[0]);
          })
        } else {
          this.account = new Account({name: 'ronny.gallin', type: 'debug'});
        }
      }
      
      observer.next(this.account);
    });
  }
}
