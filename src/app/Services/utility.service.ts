import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  //userName = new Subject<any>();
  userName = new Subject<any>(); 
  company = new Subject<any>();
  constructor() { }
}
