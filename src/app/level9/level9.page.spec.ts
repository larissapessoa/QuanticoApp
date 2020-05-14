import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Level9Page } from './level9.page';

describe('Level9Page', () => {
  let component: Level9Page;
  let fixture: ComponentFixture<Level9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Level9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
