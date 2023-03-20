import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-learning',
  templateUrl: './pipes-learning.component.html',
  styleUrls: ['./pipes-learning.component.css']
})
export class PipesLearningComponent implements OnInit {

  todaysDate = new Date();

  price: number = 70000;

  employee = {
    empid: '1',
    empname: 'Jack'
  }


  countLenght: number = 500;

  constructor() { }

  ngOnInit() {
  }

}
