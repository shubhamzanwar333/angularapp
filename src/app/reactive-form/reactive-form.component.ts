import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) { 
    this.createForm();
  }

  notAllowedNames = ['Jack', 'Harry'];
  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDeatils' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })

    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDeatils' : {
    //              'username': 'Codemind123',
    //             'email': 'codemind@gmail.com'
    //            }
    //   })
    // }, 5000)

  }

  myAge() {
   let  ObjMyserviceService = new MyserviceService();
   this.showAge = ObjMyserviceService.ageCalculator(this.age);
  }

  isSubmitted:boolean=false;
  age ;
  showAge;
  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDeatils': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.NaNames.bind(this) ]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails)
      }),
      'courses':new FormControl('Angular'),
      'Gender':new FormControl('Female'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
});
    
// this.myReactiveForm = this._fb.group({
//   userDeatils: this._fb.group({
//     username: ['', [Validators.required, this.NaNames.bind(this) ]],
//     email: ['', [Validators.required, Validators.email], this.NaEmails]
//   }),
//   course: ['Angular'],
//   skills: this._fb.array([])
//  })

  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }

  }

  NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }




}
