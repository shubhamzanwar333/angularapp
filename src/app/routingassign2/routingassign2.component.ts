import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingAssignService } from '../Services/routing-assign.service';

@Component({
  selector: 'app-routingassign2',
  templateUrl: './routingassign2.component.html',
  styleUrls: ['./routingassign2.component.css']
})
export class Routingassign2Component implements OnInit {
  finalID :any = {};
  constructor(private route: ActivatedRoute, private routingAssign : RoutingAssignService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
 
    this.routingAssign.getPostById(id).subscribe( res => {
      console.log('get post by ID', res);
      this.finalID = res;
    })
  }
}
