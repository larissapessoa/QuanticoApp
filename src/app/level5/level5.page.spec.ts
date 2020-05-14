import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Level5Page } from './level5.page';

describe('Level5Page', () => {
  let component: Level5Page;
  let fixture: ComponentFixture<Level5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Level5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
