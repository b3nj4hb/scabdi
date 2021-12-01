import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso3Component } from './recurso3.component';

describe('Recurso3Component', () => {
  let component: Recurso3Component;
  let fixture: ComponentFixture<Recurso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
