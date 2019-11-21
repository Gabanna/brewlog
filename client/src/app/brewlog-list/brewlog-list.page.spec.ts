import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrewlogListPage } from './brewlog-list.page';

describe('BrewlogListPage', () => {
  let component: BrewlogListPage;
  let fixture: ComponentFixture<BrewlogListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewlogListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrewlogListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
