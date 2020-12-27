import { Component, OnInit } from '@angular/core';
import { Employee } from './resources/employeeResources';
import { EmployeeItem } from './services/employeeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employees: Employee[];
  employeeApp: boolean;
  isNewEmployee: boolean;
  newEmployee: any = {};
  editEmployeeApp: boolean;
  editedEmployee: any = {};

  constructor(private employeeItem: EmployeeItem) { }

  ngOnInit() {
    this.employees = this.getEmployees();
  }

  getEmployees(): Employee[] {
    return this.employeeItem.getEmployeesAppData();
  }

  showEditEmployeeApp(employee: Employee) {
    if (!employee) {
      this.employeeApp = false;
      return;
    }
    this.editEmployeeApp = true;
    this.editedEmployee = employee;
  }

  showAddEmployeeApp() {
    if (this.employees.length) {
      this.newEmployee = {};
    }
    this.employeeApp = true;
    this.isNewEmployee = true;

  }

  saveEmployee(employee: Employee) {
    if (this.isNewEmployee) {
      this.employeeItem.addUser(employee);
    }
    this.employeeApp = false;
  }

  updateEmployee() {
    this.employeeItem.updateUser(this.editedEmployee);
    this.editEmployeeApp = false;
    this.editedEmployee = {};
  }

  removeEmployee(employee: Employee) {
    this.employeeItem.deleteUser(employee);
  }

  cancelEdits() {
    this.editedEmployee = {};
    this.editEmployeeApp = false;
  }

  cancelNewEmployee() {
    this.newEmployee = {};
    this.employeeApp = false;
  }

}
