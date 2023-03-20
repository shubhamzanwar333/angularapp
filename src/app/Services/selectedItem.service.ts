import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {
  selectedItem: any;

  getSelectedItem() {
    return this.selectedItem;
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
  }
}
