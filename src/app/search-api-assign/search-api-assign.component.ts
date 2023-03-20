import { Component, OnInit } from '@angular/core';
import { WikipiService } from '../Services/wikipi.service';

@Component({
  selector: 'app-search-api-assign',
  templateUrl: './search-api-assign.component.html',
  styleUrls: ['./search-api-assign.component.css']
})
export class SearchApiAssignComponent implements OnInit {

  constructor(private wikipiService : WikipiService) { }
  apiData={};
  ngOnInit() {  
  }
  searchApi(searchData){
  this.wikipiService.searchData(searchData.value).subscribe(res=> {
    console.log('Wiki', res);
    this.apiData=res;
  })
}

}
