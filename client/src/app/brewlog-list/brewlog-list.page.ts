import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { loadMenu } from './brewlog-list.menu';
import MenuSupporter from 'src/app/menu.supporter';
import { BrewlogService } from '../brewlog.service';

@Component({
  selector: 'app-brewlog-list',
  templateUrl: './brewlog-list.page.html',
  styleUrls: ['./brewlog-list.page.scss'],
})
export class BrewlogListPage extends MenuSupporter implements OnInit {

  constructor(
    popoverCtl: PopoverController,
    private brewlogService: BrewlogService
  ) {
    super(loadMenu);
  }

  ngOnInit() {
  }

}
