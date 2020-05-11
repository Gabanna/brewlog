import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LoggingService, Logger } from 'ionic-logging-service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private log: Logger;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService: TranslateService,
    private loggerService: LoggingService
  ) {
    this.log = this.loggerService.getLogger('AppComponent');
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {

      registerLocaleData(localeFr);
      registerLocaleData(localeDe);

      this.translateService.setDefaultLang('en');
      let language = navigator.language;
      if (language.indexOf('-') >= 0) {
        language = language.split('-')[0];
      }
      this.translateService.use(language);
      this.log.info('use language' + language);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })
      .catch(error => console.error(error));
  }
}
