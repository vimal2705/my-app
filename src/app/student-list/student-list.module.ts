import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule],
  exports: [StudentListComponent]
})
export class StudentListModule { }
