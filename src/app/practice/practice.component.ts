import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
@Input() image ;
@Input() name : string;
@Input() content : string;
@Input() position : string;
@Input() matches : string;
@Input() trophy : string;

  // names = ['Brazil','Russia','India','China','S.Africa'];


// enteredText= '';
// yesClick= false;

  constructor() { }

  ngOnInit() {
  }

//   viewContent()
// {
//   this.yesClick=true;
//  }
}
