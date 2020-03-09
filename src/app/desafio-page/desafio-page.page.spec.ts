import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesafioPagePage } from './desafio-page.page';

describe('DesafioPagePage', () => {
  let component: DesafioPagePage;
  let fixture: ComponentFixture<DesafioPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
