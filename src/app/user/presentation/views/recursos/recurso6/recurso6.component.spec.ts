import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso6Component } from './recurso6.component';

describe('Recurso6Component', () => {
  let component: Recurso6Component;
  let fixture: ComponentFixture<Recurso6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
