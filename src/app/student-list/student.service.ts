import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 18, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 19, grade: 'B' },
    { id: 3, name: 'Alice Johnson', age: 20, grade: 'A-' }
  ];


  getStudents(): Student[] {
    return this.students;
  }
}
