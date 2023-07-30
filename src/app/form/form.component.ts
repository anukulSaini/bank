// form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {} // Inject the Router service

  onSubmit(formData: any): void {
    // Handle form submission logic here
    // formData contains the form values
    console.log('Form submitted with data:', formData);

    // Emit the formSubmitted event
    this.formSubmitted.emit();

    // Redirect back to the registration page after form submission
    this.router.navigate(['/']); // Assuming the path for RegistrationComponent is '/'
  }
}
