import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosAsignarComponent } from './modulos-asignar.component';

describe('ModulosAsignarComponent', () => {
  let component: ModulosAsignarComponent;
  let fixture: ComponentFixture<ModulosAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosAsignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
