import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesafiosTurmaPage } from './desafios-turma.page';

describe('DesafiosTurmaPage', () => {
  let component: DesafiosTurmaPage;
  let fixture: ComponentFixture<DesafiosTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafiosTurmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesafiosTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
