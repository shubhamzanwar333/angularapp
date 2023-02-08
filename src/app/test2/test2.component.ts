import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() child : string;

  count : number = 0;
  userName : string = '';
  firstName : string = 'Rocky';
  constructor() { }

  ngOnInit() {
    console.log(this.child);
    
  }
onButtonClick(){
  let FinalCount = this.count += 1;
  console.log(FinalCount);
  
}
onClickButton(){
  console.log(`resetting username`);
  
 this.userName='';
}
onKeyUp(value) {
  console.log('$event', value.target.value)
}
}

