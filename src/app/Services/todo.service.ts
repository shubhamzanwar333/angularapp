import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    apiUrl="http://localhost:3000/todos"

    headers = new HttpHeaders()

  constructor(private httpClient : HttpClient) { }

  //create method

  create(data : any){
    return this.httpClient.post(this.apiUrl, data)
  }

  list(){
   return this.httpClient.get(this.apiUrl);
  }

  update(id:any, data:any){
    let API_URL = `${this.apiUrl}/${id}`;
   return this.httpClient.put(API_URL, data);
  }
  
  delete(id:any){
    let API_URL = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(API_URL);
  }
}
