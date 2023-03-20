import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from 'src/app/Services/selectedItem.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
  }

  onBuy(item: any) {
    this.selectedItemService.setSelectedItem(item);
  }
}
