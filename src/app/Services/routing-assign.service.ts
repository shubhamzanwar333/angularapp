import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutingAssign } from '../models/routing-assign';

@Injectable({
  providedIn: 'root'
})
export class RoutingAssignService {

  url = 'https://jsonplaceholder.typicode.com/users';
  // DI 
  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
  return this.http.get<RoutingAssign>(this.url);
  }
  getPostById(id: number) {
   return this.http.get(this.url+ '/'+ id);
  }
}
