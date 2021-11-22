import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosTablaComponent } from './modulos-tabla.component';

describe('ModulosTablaComponent', () => {
  let component: ModulosTablaComponent;
  let fixture: ComponentFixture<ModulosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
