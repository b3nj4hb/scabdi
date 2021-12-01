import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso5Component } from './recurso5.component';

describe('Recurso5Component', () => {
  let component: Recurso5Component;
  let fixture: ComponentFixture<Recurso5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
