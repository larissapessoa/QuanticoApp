import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Level7Page } from './level7.page';

describe('Level7Page', () => {
  let component: Level7Page;
  let fixture: ComponentFixture<Level7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Level7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
