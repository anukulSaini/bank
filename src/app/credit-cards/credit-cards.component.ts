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
      number: 'XXXX XXXX XXXX 1234',
      holderName: 'Anukul Saini',
      expiryDate: '09/24'
    },
    {
      type: 'Platinum',
      number: 'XXXX XXXX XXXX 5678',
      holderName: 'Anukul Saini',
      expiryDate: '12/25'
    },
    {
      type: 'Diners Club',
      number: 'XXXX XXXX XXXX 5678',
      holderName: 'Anukul Saini',
      expiryDate: '12/26'
    },
    {
      type: 'Millenniax',
      number: 'XXXX XXXX XXXX 5678',
      holderName: 'Anukul Saini',
      expiryDate: '12/25'
    },
    {
      type: 'Infinia',
      number: 'XXXX XXXX XXXX 5678',
      holderName: 'Anukul Saini',
      expiryDate: '08/27'
    },
    
  ];

  
}
