import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosModalAsignarComponent } from './seminarios-modal-asignar.component';

describe('SeminariosModalAsignarComponent', () => {
  let component: SeminariosModalAsignarComponent;
  let fixture: ComponentFixture<SeminariosModalAsignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminariosModalAsignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariosModalAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
