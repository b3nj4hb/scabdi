import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosModalAsignarComponent } from './modulos-modal-asignar.component';

describe('ModulosModalAsginarComponent', () => {
  let component: ModulosModalAsignarComponent;
  let fixture: ComponentFixture<ModulosModalAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosModalAsignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosModalAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
