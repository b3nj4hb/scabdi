import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearseminarioComponent } from './crearseminario.component';

describe('CrearseminarioComponent', () => {
  let component: CrearseminarioComponent;
  let fixture: ComponentFixture<CrearseminarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearseminarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearseminarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
