import { Injectable } from '@angular/core';

interface User {
    name: string;
    email:string,
    password:string
  }

@Injectable({
  providedIn: 'root'
})

export class UserService {
    currentUser: User = { name: '', email:'', password: '' }; 
    allUsers: User[] = [
      {
      name:"kevin",
      email:"kev@gmail.com",
      password:"123"
    }];
  
    setUser(user: User) {
      this.currentUser = user;
    }
  
    setUserData(user: User): void {
      this.allUsers.push(user);  
    }
  
    findUserByCredentials(email: string, password: string): User | null {
        
      const foundUser = this.allUsers.find(
        (user): user is User => user.email === email && user.password === password 
      );
      return foundUser || null;
    }

  }
