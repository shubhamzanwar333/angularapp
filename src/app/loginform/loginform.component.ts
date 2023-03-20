import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  msg;
  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit() {
  }
  login(username,password){
   var result = this.authService.checkuser(username,password);
   if(result==true){
      this.route.navigate(['./product'])
   } else {
    this.msg = 'invalid username or password';
   }

  }}
