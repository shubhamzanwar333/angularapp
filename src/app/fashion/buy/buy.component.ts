import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from 'src/app/Services/selectedItem.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyImg='https://img.freepik.com/premium-vector/thank-you-your-order-card-design-online-buyers-illustration-vector_180786-94.jpg?w=2000';
  selectedItem: any;

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
    this.selectedItem = this.selectedItemService.getSelectedItem();
  }
}
