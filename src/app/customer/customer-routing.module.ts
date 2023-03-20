import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';


const  customerRoute : Routes =[
  {path: '', component: CustomerListComponent}
]

@NgModule({
  imports: [RouterModule.forChild(customerRoute)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
