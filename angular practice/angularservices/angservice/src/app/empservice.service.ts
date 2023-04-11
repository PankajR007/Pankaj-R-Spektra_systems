import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  emp = [
    {id:101,name:'Pankaj R', dept:'Dev',email:'pankajrastapur@gmail.com'},
    {id:102,name:'Nitish', dept:'Dev', email:'nitish@gmail.com'},
    {id:102,name:'Shubham', dept:'Dev', email:'shubham@gmail.com'},
    {id:102,name:'Sumanth', dept:'Dev', email:'sumanth@gmail.com'},
    {id:102,name:'Siva', dept:'Dev', email:'siva@gmail.com'},
  ]

  constructor() { }

  getEmployee(){
    return this.emp;
  }
}
