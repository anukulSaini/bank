import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModeule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { GreetingComponent } from './greeting/greeting.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Default route
  { path: 'accdetails', component: AccountDetailsComponent },
  { path: 'login', component: LoginComponent}
];

// const routes: Routes = [
//   { path: '', component: RegistrationComponent },
//   { path: 'form', component: FormComponent },
// ];


@NgModule({
  declarations: [
    AppComponent,

    LandingComponent,
     GreetingComponent,
     TwoWayBindingExampleComponent,
     AccountDetailsComponent,
     FormComponent,
     RegistrationComponent,
     LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
