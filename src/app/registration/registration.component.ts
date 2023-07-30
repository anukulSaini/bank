// registration.component.ts
import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component'; // Import FormComponent

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  showForm: boolean = false;

  onFormSubmitted(formData: any): void {
    console.log('Form submitted with data:', formData);
    this.showForm = false; // Hide the form after form submission
  }

  onRegisterButtonClick(): void {
    this.showForm = true; // Show the form when the "Register" button is clicked
  }
}
