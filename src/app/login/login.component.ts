import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {} 

  username: string = '';
  password: string = '';
  showErrorMessage: boolean = false;



  onSubmit() {
    // Hardcoded dummy users
    const dummyUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];

    // Check if the entered credentials match any dummy user
    const foundUser = dummyUsers.find(user => user.username === this.username && user.password === this.password);

    if (foundUser) {
      // Login successful, you can redirect to a new page here
      this.showErrorMessage = false;
      console.log('Login successful!');
      this.router.navigate(['/']);
    } else {
      // Login failed, show error message
      this.showErrorMessage = true;
      console.log('Invalid credentials. Please try again.');
      
    }
  }

}
