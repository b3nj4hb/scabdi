import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso1Component } from './recurso1.component';

describe('Recurso1Component', () => {
  let component: Recurso1Component;
  let fixture: ComponentFixture<Recurso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
