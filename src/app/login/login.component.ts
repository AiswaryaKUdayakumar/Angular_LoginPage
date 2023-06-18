// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  isRegistering: boolean = false;

  constructor(private router: Router) {}
  
  

  login() {
    // Perform authentication logic here
    // For simplicity, let's assume the login is successful

    // Redirect to the home page after successful login
    this.router.navigate(['/home']);
  }

  // register() {
  //   // Perform registration logic here

  //   // After successful registration, switch to login mode
  //   this.isRegistering = false;
  // }

  forgotPassword() {
    // Perform forgot password logic here
  }
}

