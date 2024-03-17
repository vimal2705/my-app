import { Routes } from '@angular/router';
// import { StudentListModule } from './student-list/student-list.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './service/auth.guard';
import { SignupComponentComponent } from './signup-component/signup-component.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponentComponent },
    { path: 'signup', component: SignupComponentComponent },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
];

