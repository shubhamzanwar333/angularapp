import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService } from '../Services/myservice.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
// @Input() image ;
// @Input() name : string;
// @Input() content : string;
// @Input() position : string;
// @Input() matches : string;
// @Input() trophy : string;

  // names = ['Brazil','Russia','India','China','S.Africa'];


// enteredText= '';
// yesClick= false;
  // products;

    items;
  priceSearch:number;
  constructor(private myProduct : ProductService , private myservice : MyserviceService ) { }

  ngOnInit() {
    this.items= this.myservice.products;
    // this.myProduct.getProducts().subscribe(res => {
    //   console.log(res);
    //   this.products = res;
    // }, err => {
    //   console.log(err);
      
    // })
  }

  // filterProducts() {
  //   this.myProduct.getProducts(this.priceSearch).subscribe(res => {
  //     console.log(res);
  //     this.products = res;
  //   }, err => {
  //     console.log(err);  
  //   })
  // }

//   viewContent()
// {
//   this.yesClick=true;
//  }
}
