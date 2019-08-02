import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: '321654987',
      dateOfBirth: '11/20/1979',
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
    {
      id: 2,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'john@test.com',
      dateOfBirth: '11/20/1979',
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
    {
      id: 3,
      name: 'Harry',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: '321654987',
      dateOfBirth: '11/20/1979',
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/img1.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
