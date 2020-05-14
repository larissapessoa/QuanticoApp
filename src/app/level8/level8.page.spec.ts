import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Level8Page } from './level8.page';

describe('Level8Page', () => {
  let component: Level8Page;
  let fixture: ComponentFixture<Level8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Level8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
