import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent {
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;
  emi: number = 0;
  totalAmountPaid: number = 0;
  totalInterestPaid: number = 0;

  calculateEMI(): void {
    const principal = this.loanAmount;
    const rateOfInterest = this.interestRate / 100 / 12; // Monthly interest rate
    const numberOfPayments = this.loanTenure * 12; // Monthly number of payments

    const emi =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    this.emi = emi;

    this.totalAmountPaid = emi * numberOfPayments;
    this.totalInterestPaid = this.totalAmountPaid - principal;
  }
}
