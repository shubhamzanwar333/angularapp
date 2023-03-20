import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { BuyComponent } from './buy/buy.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MensComponent, WomenComponent, KidsComponent, BuyComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionhubModule { 
  constructor(){
    console.log('Fashion module called');
    
  }
}
