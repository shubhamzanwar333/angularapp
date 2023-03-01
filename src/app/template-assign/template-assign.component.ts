import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-assign',
  templateUrl: './template-assign.component.html',
  styleUrls: ['./template-assign.component.css']
})
export class TemplateAssignComponent implements OnInit {

  cities=['Mumbai', 'Kolkata','Delhi'];

  genders=['Male', 'Female'];

  isSubmitted:boolean = false;
  passwordMismatch:boolean = false;

imageUrl = 'https://arcmi.org/wp-content/uploads/sites/15/2018/04/Registration-is-open-yellow.jpg';

formData = {

firstName :'',
lastName : '',
age : '',
email : '',
password :'',
Cpassword: '',
contactNumber: '',
cities: '',
genders: '',
}
  constructor() { }
  ngOnInit() {
  }

  checkPasswords() {
    this.passwordMismatch = this.formData.password !== this.formData.Cpassword;
  }



  login(form:NgForm){
    this.isSubmitted = true;
    if (!this.passwordMismatch) {
      console.log(form);     
}
form.reset();
}

}

  



