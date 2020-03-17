import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurmaPagePage } from './turma-page.page';

describe('TurmaPagePage', () => {
  let component: TurmaPagePage;
  let fixture: ComponentFixture<TurmaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurmaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
