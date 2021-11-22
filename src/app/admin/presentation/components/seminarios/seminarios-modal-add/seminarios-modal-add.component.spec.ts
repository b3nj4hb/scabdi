import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosModalAddComponent } from './seminarios-modal-add.component';

describe('SeminariosModalAddComponent', () => {
  let component: SeminariosModalAddComponent;
  let fixture: ComponentFixture<SeminariosModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminariosModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariosModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
