import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title = "Top 3 Bollywood Movies";

  movies : Movie[] = [
    {title: '3 iDiots' , director:'Rajkumar', cast:'Amir', releaseDate:'2009'},
    {title: 'Sooryavansham' , director:'Karan', cast:'Amitabh', releaseDate:'1998'},
    {title: 'Pachadlela' , director:'Kothare', cast:'Lakshya', releaseDate:'2001'}
  ]

  selectedCountry: string='';
  selectedState: string='';


  countries = ['India', 'Australia'];
  states = {
    India: [ 'Maharashtra','Gujarat','TamilNadu','Rajasthan','Bihar'],
    Australia: ['Queensland', 'New South Wales','Tasmania','Victoria']
  };


  
  constructor() { }

  
  ngOnInit() {
    
  }
}
