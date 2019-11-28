import { Component, OnInit, Input } from '@angular/core';
import MenuItem from '@app/popovermenu/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  public items: Array<MenuItem> = [];

  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {}

}
