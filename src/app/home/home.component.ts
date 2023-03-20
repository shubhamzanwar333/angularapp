import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];
  
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
    
    const source = from([1,2,3,4,5]);
  }
  CreatePosts()
{
  this.firebaseService.createPost().subscribe(res => {
    console.log('firebase Post', res);
  })
}

GetData(){
  this.firebaseService.getPostDataFirebase().subscribe(res => {
    console.log('Firebase Get', res);
  })
}
}
