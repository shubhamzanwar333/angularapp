import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {

@Output() fromChild : EventEmitter<string> = new EventEmitter<string> ();

@Output() fromThisChild : EventEmitter<string> = new EventEmitter<string> ();


lastname : string ='Bhai';
showdetails = false;
empObj = {
  name: 'Shubham',
  id : '333',
  city : 'Pune'
}

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.fromChild.emit(this.lastname);
  }

  sendingParent(){
    this.showdetails=!this.showdetails;
    this.fromThisChild.emit(this.empObj.name);
    this.fromThisChild.emit(this.empObj.id);
    this.fromThisChild.emit(this.empObj.city);
  }

}
