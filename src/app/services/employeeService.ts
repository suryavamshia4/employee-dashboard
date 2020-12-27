import { Injectable } from '@angular/core';
import { Employee } from '../resources/employeeResources';

@Injectable({
  providedIn: 'root'
})
export class EmployeeItem {

  private employeeData: Employee[] = [
    {
      employeeId: 1,
      firstName: 'Srikanth',
      lastName: 'Suryavamshi',
      occupation: 'Education'
    },
    {
      employeeId: 2,
      firstName: 'Dileep',
      lastName: 'Sanapala',
      occupation: 'Employment'
    },
    {
      employeeId: 3,
      firstName: 'Ms',
      lastName: 'Dhoni',
      occupation: 'Education'
    },
    {
      employeeId: 4,
      firstName: 'Kevin',
      lastName: 'Peterson',
      occupation: 'Employment'
    }
  ];

  constructor() { }

  deleteUser(employee: Employee) {
    this.employeeData.splice(this.employeeData.indexOf(employee), 1);
  }

  
  addUser(employee: Employee) {
    employee.employeeId = this.employeeData.length + 1;
    this.employeeData.push(employee);
  }

  updateUser(employee: Employee) {
    const index = this.employeeData.findIndex(data => employee.employeeId === data.employeeId);
    this.employeeData[index] = employee;
  }

  getEmployeesAppData(): Employee[] {
    return this.employeeData;
  }

}
