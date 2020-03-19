import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdiconarTemasComponent } from './adiconar-temas.component';

describe('AdiconarTemasComponent', () => {
  let component: AdiconarTemasComponent;
  let fixture: ComponentFixture<AdiconarTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiconarTemasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdiconarTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
