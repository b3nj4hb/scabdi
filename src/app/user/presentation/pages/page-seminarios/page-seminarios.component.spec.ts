import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSeminariosComponent } from './page-seminarios.component';

describe('PageSeminariosComponent', () => {
  let component: PageSeminariosComponent;
  let fixture: ComponentFixture<PageSeminariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSeminariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSeminariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
