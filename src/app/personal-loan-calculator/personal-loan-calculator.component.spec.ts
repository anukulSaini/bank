import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanCalculatorComponent } from './personal-loan-calculator.component';

describe('PersonalLoanCalculatorComponent', () => {
  let component: PersonalLoanCalculatorComponent;
  let fixture: ComponentFixture<PersonalLoanCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanCalculatorComponent]
    });
    fixture = TestBed.createComponent(PersonalLoanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
