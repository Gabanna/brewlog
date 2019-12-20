import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrauverfahrenComponent } from './brauverfahren.component';

describe('BrauverfahrenComponent', () => {
  let component: BrauverfahrenComponent;
  let fixture: ComponentFixture<BrauverfahrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrauverfahrenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrauverfahrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
