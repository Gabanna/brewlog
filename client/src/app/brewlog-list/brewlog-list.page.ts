import { Component, OnInit } from '@angular/core';
import { loadMenu } from './brewlog-list.menu';
import MenuSupporter from 'src/app/menu.supporter';
import { BrewlogService } from '../brewlog.service';
import BrewLog from '../model/brewlog.model';

@Component({
  selector: 'app-brewlog-list',
  templateUrl: './brewlog-list.page.html',
  styleUrls: ['./brewlog-list.page.scss'],
})
export class BrewlogListPage extends MenuSupporter implements OnInit {

  public brewlogs: Array<BrewLog> = [];

  constructor(
    private brewlogService: BrewlogService
  ) {
    super(loadMenu);
  }

  async ngOnInit() {
    this.brewlogs = await this.brewlogService.loadBrewlogs();
  }

}
