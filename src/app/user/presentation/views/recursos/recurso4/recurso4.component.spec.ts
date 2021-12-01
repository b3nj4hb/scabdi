import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recurso4Component } from './recurso4.component';

describe('Recurso4Component', () => {
  let component: Recurso4Component;
  let fixture: ComponentFixture<Recurso4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recurso4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recurso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
