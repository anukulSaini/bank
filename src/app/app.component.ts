import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Banking_Site';

  constructor(private router: Router) {} // Inject the Router

  loadDynamicComponent(): void {
    this.router.navigateByUrl('/dynamic'); // Navigate to MyDynamicComponent when the button is clicked
  }

}
