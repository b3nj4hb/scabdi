import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosOracionComponent } from './pedidos-oracion.component';

describe('PedidosOracionComponent', () => {
  let component: PedidosOracionComponent;
  let fixture: ComponentFixture<PedidosOracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosOracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosOracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
