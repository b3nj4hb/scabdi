import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosNavbarComponent } from './seminarios-navbar.component';

describe('SeminariosNavbarComponent', () => {
  let component: SeminariosNavbarComponent;
  let fixture: ComponentFixture<SeminariosNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminariosNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminariosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
