// account-details.component.ts
import { Component, EventEmitter ,Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent {

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {} // Inject the Router service

  accountHolderName: string = '';
  contactInformation: string = '';
  address: string = '';
  city: string = '';
  country: string = '';
  postalCode: string = '';
  phoneNumber: string = '';

  onSubmit(formData: any): void {
    // Handle form submission to the server or perform other actions
    console.log('Form submitted:');
    console.log('Account Holder Name:', this.accountHolderName);
    console.log('Contact Information:', this.contactInformation);
    console.log('Address:', this.address);
    console.log('City:', this.city);
    console.log('Country:', this.country);
    console.log('Postal Code:', this.postalCode);
    console.log('Phone Number:', this.phoneNumber);

    console.log('Form submitted with data:', formData);

    // Emit the formSubmitted event
    this.formSubmitted.emit();

    // Redirect back to the registration page after form submission
    this.router.navigate(['/']); // Assuming the path for RegistrationComponent is '/'

  }
}
