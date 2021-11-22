import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosModalAddComponent } from './modulos-modal-add.component';

describe('ModulosModalAddComponent', () => {
  let component: ModulosModalAddComponent;
  let fixture: ComponentFixture<ModulosModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
