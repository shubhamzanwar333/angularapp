import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.css']
})
export class ReactiveForm3Component implements OnInit {

  genders = ['Male', 'Female'];
  countries=['India','USA','Australia'];

  myReact: FormGroup;
  myReact2: FormGroup;
  
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm()
  {
    this.myReact = new FormGroup({
      'fullname' : new FormControl(null, Validators.required),
      'birthdate': new FormControl(null, Validators.required),
      'gender' : new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'phoneno' :new FormControl(null, Validators.required),
      'bio' :new FormControl(null, Validators.required)

  }),
  this.myReact2 = new FormGroup ({
    'username' : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'Cpassword': new FormControl(null, Validators.required),
      'checkBoxx': new FormControl(null, Validators.required),
  })


}
}
