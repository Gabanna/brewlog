import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LoggingService, Logger } from 'ionic-logging-service';

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
    this.log = loggerService.getLogger('AppComponent');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translateService.setDefaultLang('en');
      let language = navigator.language as string;
      if(language.indexOf('-') >= 0) {
        language = language.split('-')[0];
      }
      this.translateService.use(language);
      this.log.info('use language' + language);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
