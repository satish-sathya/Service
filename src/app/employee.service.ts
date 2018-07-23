import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  getEmployees() {
    return[
    {id:1,'name':'satish',age:21 },
    {id:2,'name':'mahesh',age:81 },
    {id:3,'name':'sathya',age:81 },
    {id:4,'name':'dharma',age:11 },
    {id:5,'name':'yash',age:41 },
  
  ]
  };


  constructor() { }

}
