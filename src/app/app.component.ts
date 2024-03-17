import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListModule } from './student-list/student-list.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,StudentListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
