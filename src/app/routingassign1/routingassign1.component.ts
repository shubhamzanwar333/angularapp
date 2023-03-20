import { Component, OnInit } from '@angular/core';
import { RoutingAssign } from '../models/routing-assign';
import { RoutingAssignService } from '../Services/routing-assign.service';

@Component({
  selector: 'app-routingassign1',
  templateUrl: './routingassign1.component.html',
  styleUrls: ['./routingassign1.component.css']
})
export class Routingassign1Component implements OnInit {

  arrPost: RoutingAssign[] = [] ;
  // DI pots service
  constructor(private routingAssign : RoutingAssignService) { }

  ngOnInit() {
    this.routingAssign.getPost().subscribe(res => {
      this.arrPost = res;
      console.log('user arr data' , res);
    })
  }
}
