import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US";
  constructor( private httpClient: HttpClient) { }

  getFinance(){
    let headers = new HttpHeaders({
      "X-RapidAPI-Key": "0cbad99828msh5de012e025559d4p1f2e93jsn2de0cfa96c21",
		  "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    })
    
    return  this.httpClient.get(this.url, {headers: headers}); 
  }
}
