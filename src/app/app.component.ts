import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentToChild: string = "I am coming from parent ";
  title = 'angularapp';
  name = 'Shubham';

 
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  
  data = {
    name:'codemind',
    dept :'ID'
  }
  
    constructor(){
    }
    onParent(val) {
      console.log("From child to parent: ", val);
      
    }

    onParentsss(newVal){
      console.log("the value of object is :", newVal);
      
    }
  }


