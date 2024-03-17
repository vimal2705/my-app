import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ProductListModule } from '../product-list/product-list.module';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  standalone:true,
  imports:[ProductListModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private authService: AuthService,private userService:UserService, private router: Router) {}
  userDetails: {
    email: string,
    name:string
  } = {
    email: this.userService.currentUser.email,
    name:this.userService.currentUser.name
  };
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  student(): void {
    this.router.navigate(['/students']);
  }
}
