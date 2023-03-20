import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from 'src/app/Services/selectedItem.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
  }

  onBuy(item: any) {
    this.selectedItemService.setSelectedItem(item);
  }
}
