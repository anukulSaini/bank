import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent {
  creditCards = [
    {
      type: 'Gold',
      number: 'XXXX XXXX XXXX XXXX',
      holderName: 'John Doe',
      expiryDate: '09/24'
    },
    {
      type: 'Platinum',
      number: 'XXXX XXXX XXXX XXXX',
      holderName: 'Jane Smith',
      expiryDate: '12/25'
    },
    // Add more credit card objects as needed
  ];

  applyForCard(cardType: string) {
    // Implement the logic to apply for the selected card type here
    console.log(`Applying for ${cardType} Card...`);
  }
}
