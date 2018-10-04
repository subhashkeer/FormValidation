import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

import { Employee } from '../models/employee.model';
 
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false; 

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

 departments: Department[]=[
  { id: 1, name: 'Help Desk' },
  { id: 2, name: 'HR' },
  { id: 3, name: 'IT' },
  { id: 4, name: 'Payroll' }
 ];
  constructor() { }

    togglephotopreview() {
      this.previewPhoto = ! this.previewPhoto;
    };
  

  ngOnInit() {
  }
  saveEmployee(newEmployee : Employee):void{
    console.log(newEmployee);
  }
}
