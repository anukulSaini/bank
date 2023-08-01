import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-loan-calculator',
  templateUrl: './personal-loan-calculator.component.html',
  styleUrls: ['./personal-loan-calculator.component.scss']
})
export class PersonalLoanCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;
  emi: number = 0;
  totalAmountPaid: number = 0;
  totalInterestPaid: number = 0;
  errorMessage: string = '';

  calculateEMI(): void {
    
    if (this.interestRate < 10) {
      this.errorMessage = 'Interest rate must be at least 10%';
      this.resetCalculation();
      return; 
    } else {
      this.errorMessage = ''; 
    }

    const principal = this.loanAmount;
    const rateOfInterest = this.interestRate / 100 / 12; 
    const numberOfPayments = this.loanTenure * 12; 

    const emi =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    this.emi = emi;

    this.totalAmountPaid = emi * numberOfPayments;
    this.totalInterestPaid = this.totalAmountPaid - principal;
  }

  private resetCalculation(): void {
    this.emi = 0;
    this.totalAmountPaid = 0;
    this.totalInterestPaid = 0;
  }
}
