import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosNavbarComponent } from './modulos-navbar.component';

describe('ModulosNavbarComponent', () => {
  let component: ModulosNavbarComponent;
  let fixture: ComponentFixture<ModulosNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
