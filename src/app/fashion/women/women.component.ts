import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from 'src/app/Services/selectedItem.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
  }

  onBuy(item: any) {
    this.selectedItemService.setSelectedItem(item);
  }
}
