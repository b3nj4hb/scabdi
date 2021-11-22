import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSesionesComponent } from './page-sesiones.component';

describe('PageSesionesComponent', () => {
  let component: PageSesionesComponent;
  let fixture: ComponentFixture<PageSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
