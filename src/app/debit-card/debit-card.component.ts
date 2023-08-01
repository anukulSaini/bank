import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent {
  creditCards = [
    {
      type: 'Debitgit',
      number: 'XXXX XXXX XXXX 1234',
      holderName: 'Anukul Saini',
      expiryDate: '09/24'
    }
  ]
}
