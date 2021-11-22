import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesModalAddComponent } from './sesiones-modal-add.component';

describe('SesionesModalAddComponent', () => {
  let component: SesionesModalAddComponent;
  let fixture: ComponentFixture<SesionesModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionesModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
