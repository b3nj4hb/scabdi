import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso7Component } from './recurso7.component';

describe('Recurso7Component', () => {
  let component: Recurso7Component;
  let fixture: ComponentFixture<Recurso7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
