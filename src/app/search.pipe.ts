import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, price?: number) {
    if (price) {
      return value.filter((product: any) => product.price <= price);
    }
    return value;
  }

  // transform(value: any, searchTearm: any): any {

  //   return value.filter(function(searchh) { 

  //     return searchh.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > - 1
  //   });
  // }



}
