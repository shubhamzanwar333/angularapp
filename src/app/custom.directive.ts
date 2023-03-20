import { Directive, ElementRef  } from '@angular/core';
import { Route } from '@angular/router';



@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor( private el : ElementRef ) {
    el.nativeElement.style.backgroundColor = 'gray';
    // render.setStyle(el.nativeElement,'backgroundColor','red');
   }

}
