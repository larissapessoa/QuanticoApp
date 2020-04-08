import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesafioProfessorPage } from './desafio-professor.page';

describe('DesafioProfessorPage', () => {
  let component: DesafioProfessorPage;
  let fixture: ComponentFixture<DesafioProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
