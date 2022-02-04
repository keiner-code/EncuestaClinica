import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientesrealizarpruebaPage } from './pacientesrealizarprueba.page';

describe('PacientesrealizarpruebaPage', () => {
  let component: PacientesrealizarpruebaPage;
  let fixture: ComponentFixture<PacientesrealizarpruebaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesrealizarpruebaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesrealizarpruebaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
