import { Component } from '@angular/core';





@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  
  
})
export class LandingComponent {
  login:boolean = true;
  showForm: boolean = false; 

  showFormLogin: boolean = false;

  disableLogin(){
    this.login=false;
    console.log("logged in");
    
  }
  



}
