import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';
import { MyserviceService } from '../Services/myservice.service';

@Component({
  selector: 'app-service-learning',
  templateUrl: './service-learning.component.html',
  styleUrls: ['./service-learning.component.css']
})
export class ServiceLearningComponent implements OnInit {

  users;
  products = {};
  constructor(private myservice : MyserviceService , private demoService : DemoService) { }

  
  namesearch: string = '';

  ngOnInit() {
  //  this.products = this.myservice.products;
   this.demoService.getUsers().subscribe(res => {
    console.log('user api results', res);
    this.users = res;
  }, err => {
    console.log(err);
  })
  }

}
