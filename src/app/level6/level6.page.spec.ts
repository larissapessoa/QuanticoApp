import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Level6Page } from './level6.page';

describe('Level6Page', () => {
  let component: Level6Page;
  let fixture: ComponentFixture<Level6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Level6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
