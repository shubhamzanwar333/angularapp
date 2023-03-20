import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url = 'https://angular2023-b9291-default-rtdb.firebaseio.com/';

  constructor(private httpClient : HttpClient) { }

  createPost(){
    let postData = 
    {
      title: 'This is Firebase example',
      content : 'We are calling angular method'
    }
    return this.httpClient.post(this.url + 'posts.json', postData);
  }

  getPostDataFirebase(){
   return this.httpClient.get(this.url + 'posts.json');
  }
}
