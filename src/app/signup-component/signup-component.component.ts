import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './signup-component.component.html',
  styleUrl: './signup-component.component.css'
})
export class SignupComponentComponent {
  errorMessage: string = '';
  userDetails: {
    email: string,
    password: string,
    name:string
  } = {
    email: '',
    password: '',
    name:''
  };

  constructor(private userService: UserService, private router: Router) {}

  submitForm(form: any): void {
      if (this.userDetails) {
        this.errorMessage = ''; 
        console.log("foundUser",this.userDetails);
        this.userService.setUserData(this.userDetails)
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Incorrect username or password';
      }

  }

  navigateToSignin() {
    this.router.navigate(['/login']);
  }
}
