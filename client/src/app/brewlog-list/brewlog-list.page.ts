import { Component, OnInit } from '@angular/core';
import { loadMenu } from './brewlog-list.menu';
import MenuSupporter from 'src/app/menu.supporter';
import { BrewlogService } from '../brewlog.service';
import { BrewLog } from '@app/model';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brewlog-list',
  templateUrl: './brewlog-list.page.html',
  styleUrls: ['./brewlog-list.page.scss'],
})
export class BrewlogListPage extends MenuSupporter implements OnInit {

  public brewlogs: Array<BrewLog> = [];
  private datePipe: DatePipe;

  constructor(
    private brewlogService: BrewlogService,
    private translateService: TranslateService
  ) {
    super(loadMenu);
    const lang = this.translateService.currentLang ? this.translateService.currentLang : this.translateService.defaultLang;
    this.datePipe = new DatePipe(lang);
  }

  async ngOnInit() {
    this.brewlogs = await this.brewlogService.loadBrewlogs();
  }

  public format(brautag: Date): string {
    return this.datePipe.transform(brautag, 'mediumDate')
  }
}
