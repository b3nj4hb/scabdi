import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModulosComponent } from './page-modulos.component';

describe('PageModulosComponent', () => {
  let component: PageModulosComponent;
  let fixture: ComponentFixture<PageModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
