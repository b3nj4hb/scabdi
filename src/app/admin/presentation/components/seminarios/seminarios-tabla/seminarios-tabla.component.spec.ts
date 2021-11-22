import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosTablaComponent } from './seminarios-tabla.component';

describe('SeminariosTablaComponent', () => {
  let component: SeminariosTablaComponent;
  let fixture: ComponentFixture<SeminariosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminariosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
