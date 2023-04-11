import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    employee: any[]| undefined;
    constructor(private employeeService:EmpserviceService){}
    displayEmployee(){
      this.employee = this.employeeService.getEmployee();
    }
}

