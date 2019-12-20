import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HefeartComponent } from './hefeart.component';

describe('HefeartComponent', () => {
  let component: HefeartComponent;
  let fixture: ComponentFixture<HefeartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HefeartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HefeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
