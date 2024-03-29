import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PasswordComponent } from './password/password.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { PracticeComponent } from './practice/practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TemplateFormComponent } from './template-form/template-form.component';


import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateAssignComponent } from './template-assign/template-assign.component';
import { ReactiveForm3Component } from './reactive-form3/reactive-form3.component';
import { ServiceLearningComponent } from './service-learning/service-learning.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { CustomPipe } from './custom.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SearchPipe } from './search.pipe';
import { SubjectLearning1Component } from './subject-learning1/subject-learning1.component';
import { SubjectLearning2Component } from './subject-learning2/subject-learning2.component';
import { SubjectLearning3Component } from './subject-learning3/subject-learning3.component';
import { SubjectLearning4Component } from './subject-learning4/subject-learning4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { Routingassign1Component } from './routingassign1/routingassign1.component';
import { Routingassign2Component } from './routingassign2/routingassign2.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './product/product.module';
import { MorepracticeComponent } from './morepractice/morepractice.component';
import { OrdersModule } from './orders/orders.module';
import { FashionComponent } from './fashion/fashion.component';
import { FashionhubModule } from './fashion/fashionhub.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { TodoComponent } from './todo/todo.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HooksComponent } from './hooks/hooks.component';
import { SearchApiAssignComponent } from './search-api-assign/search-api-assign.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    PasswordComponent,
    OutputComponentComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    PracticeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TemplateAssignComponent,
    ReactiveForm3Component,
    ServiceLearningComponent,
    PipesLearningComponent,
    CustomPipe,
    ProductFilterComponent,
    SearchPipe,
    SubjectLearning1Component,
    SubjectLearning2Component,
    SubjectLearning3Component,
    SubjectLearning4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    Routingassign1Component,
    Routingassign2Component,
    UserdetailsComponent,
    MorepracticeComponent,
    FashionComponent,
    TodoComponent,
    LoginformComponent,
    HooksComponent,
    SearchApiAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule ,
    ProductModule,
    OrdersModule,
    FashionhubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App module called');
    
  }
 }
