import { Component, OnInit, Input } from '@angular/core';
import { Hefeart } from '@app/model';

@Component({
  selector: 'app-hefeart',
  templateUrl: './hefeart.component.html',
  styleUrls: ['./hefeart.component.scss'],
})
export class HefeartComponent implements OnInit {

  @Input()
  public value: Hefeart;

  constructor() { }

  ngOnInit() {}

}
