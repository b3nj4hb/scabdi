import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosNavbarComponent } from './socios-navbar.component';

describe('SociosNavbarComponent', () => {
  let component: SociosNavbarComponent;
  let fixture: ComponentFixture<SociosNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SociosNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
