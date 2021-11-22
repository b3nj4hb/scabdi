import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesTablaComponent } from './sesiones-tabla.component';

describe('SesionesTablaComponent', () => {
  let component: SesionesTablaComponent;
  let fixture: ComponentFixture<SesionesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
