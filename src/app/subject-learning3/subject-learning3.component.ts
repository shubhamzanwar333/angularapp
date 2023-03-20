import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-subject-learning3',
  templateUrl: './subject-learning3.component.html',
  styleUrls: ['./subject-learning3.component.css']
})
export class SubjectLearning3Component implements OnInit{

  userName;
  MyCompany;
constructor(private _utilityService : UtilityService) { 

  this._utilityService.userName.subscribe(res => {
      console.log('Comp1' , res);
      this.userName=res;
  }, err => {
      console.log('Error Occurred', err);
      
  })
  
  this._utilityService.company.subscribe(res => {
    console.log('Comp1' , res);
    this.MyCompany = res;

  })
}

ngOnInit() {
}
updateUserName(uname,company)
{
  this.userName=uname.value;
  console.log(uname.value);
  this._utilityService.userName.next(uname.value);

  this.MyCompany=company.value;
  console.log(company.value);
  this._utilityService.company.next(company.value)
  
}

}