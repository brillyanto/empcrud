import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview : boolean = false;
  gender = 'Female';
  departments: Department[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Catering' },
    { id: 4, name: 'House Keeping' },
    { id: 5, name: 'Security' },
    { id: 6, name: 'Customer Services' },
  ];
  constructor() { }

  ngOnInit() {
  }

  saveEmp(empForm: NgForm):void{
    console.log(empForm);
  }

  togglePreview(){
    this.photoPreview = !this.photoPreview;
  }

}
