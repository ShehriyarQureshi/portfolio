import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesWorkedComponent } from './companies-worked.component';

describe('CompaniesWorkedComponent', () => {
  let component: CompaniesWorkedComponent;
  let fixture: ComponentFixture<CompaniesWorkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesWorkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesWorkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
