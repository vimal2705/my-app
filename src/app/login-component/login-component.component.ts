import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login-component',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  errorMessage: string = '';
  userDetails: {
    email: string,
    password: string,
  } = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService,private userService: UserService, private router: Router) {}

  submitForm(form: any): void {
    const foundUser = this.userService.findUserByCredentials(this.userDetails.email, this.userDetails.password);
    console.log("foundUser",foundUser);
    
      if (foundUser) {
        this.errorMessage = ''; 
        console.log("foundUser",foundUser);
        this.authService.login();
        this.userService.setUser(foundUser)
        this.router.navigate(['/Home']);
      } else {
        // Failed login
        this.errorMessage = 'Incorrect username or password';
      }

  }
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

}
