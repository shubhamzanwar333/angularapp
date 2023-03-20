import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { BuyComponent } from './fashion/buy/buy.component';
import { FashionComponent } from './fashion/fashion.component';
import { KidsComponent } from './fashion/kids/kids.component';
import { MensComponent } from './fashion/mens/mens.component';
import { WomenComponent } from './fashion/women/women.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { Routingassign1Component } from './routingassign1/routingassign1.component';
import { Routingassign2Component } from './routingassign2/routingassign2.component';
import { TemplateAssignComponent } from './template-assign/template-assign.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TodoComponent } from './todo/todo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  {path:'product', canActivate:[AuthGuard], component:  ProductComponent,
    children: [
      {path :'laptop', component: LaptopComponent },
      {path : 'mobile', component: MobileComponent},
      {path : 'camera', component: CameraComponent},
      {path: 'watch', component: WatchComponent}
    ]},

  {path: 'post', component : DemopostComponent},
  {path: 'postdetails/:id', component: DemopostdetailsComponent},
  {path: 'user', component: Routingassign1Component},
  {path: 'userdetails/:id', component: Routingassign2Component},
  {path:'Myuserdetails', component: UserdetailsComponent},
  {path:'login' , component: LoginformComponent},
  {path:'order' , component: OrderlistComponent},
  {path: 'fashion', 
    children:[
      {path: '', component: FashionComponent},
      {path: 'mens', component: MensComponent},
      {path: 'women', component: WomenComponent},
      {path: 'kids', component: KidsComponent},
      {path:'buy', component: BuyComponent}
    ]
},
// {path: 'customer', component: CustomerListComponent},
// {path: 'admin', component: AdminListComponent},
{path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
{path: 'admin', loadChildren:'./admin/admin.module#AdminModule'},
{path:'todo', component: TodoComponent},
  {path : '**' , component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
