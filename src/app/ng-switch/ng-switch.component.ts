import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

// courses : any[] = [
// {
//   id:1,
//   desc:"Angular core deep Dive",
//   iconURL :"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
//   category: "Intermidiate"
// },
// {
//   id:2,
//   desc:"JS",
//   iconURL :"https://static.javatpoint.com/images/javascript/javascript_logo.png",
//   category: "Advanced"
// }
// ]
// width = 50;
// height=50;
countries = ['India', 'Australia','England'];

cricketTeams = [
{
  teamName: 'India',
  flag : 'https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg',
  players : ['Rohit sharma','Shikhar Dhawan','Virat Kohli','Suryakumar Y', 'Hardik Pandya', 'MSD (wk,c)']
},
{
  teamName: 'Australia',
  flag : 'https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg',
  players : ['David Warner (c)','Steve Smith','T Pain (wk)','P Cummins','N Lyon','S Boland']
},
{
  teamName: 'England',
  flag : 'https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg',
  players : ['Johny Bairstow (wk)','Joe Root (c)','Jos buttler','A Cook', 'Jimmy Anderson','S Broad']
}
]
selectedCountry: string;

selectCountry(country: string) {
  this.selectedCountry = country;
  console.log(this.selectedCountry);
  
}

// selectedcountry = '';
// countries = ['India','Australia','England'];

// players = [
//   {
//     India : ['Rohit sharma','Shikhar Dhawan','Hardik Pandya']
//   },
//   {
//     Australia :['David Warner','Stew Smith','Ricky Ponting']
//   },
//   {
//     England : ['Johny Bairstow','Joe Root','Jos buttler']
//   }

// ]





  constructor() { }

  ngOnInit() {
  }

}
