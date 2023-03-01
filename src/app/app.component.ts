import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // parentToChild: string = "I am coming from parent ";
  // title = 'angularapp';
  // name = 'Shubham';

 
  // posts = [
  //   {
  //     title: 'Pam Tree',
  //     content: 'I love this tree'
  //   },
  //   {
  //     title: 'Mango Tree',
  //     content: 'I love this tree'
  //   }
  // ]
  players = [
    {
    image : "https://www.financialexpress.com/wp-content/uploads/2021/03/MS-Dhoni-IPL-2021-Chennai-Super-Kings-Full-Squad-CSK.jpg",
    name : "MS Dhoni",
    content : "Most Successful Captain Of CSK",
    position : 'Right Handed Batsman',
    matches : '234',
    trophy : '4',
    },
    {
      image: "https://www.insidesport.in/wp-content/uploads/2021/10/1-2020-08-10T120632.388-1-1.jpg",
      name : "Rohit Sharma",
      content : "Successful Captain Of MI",
      position : 'Right Handed Batsman',
      matches : '227',
      trophy : '5',
      },
      {
        image : "https://www.insidesport.in/wp-content/uploads/2021/03/IPL-Season-12-1-1.jpg",
        name : "Virat Kohli",
        content : "Captain Of RCB",
        position : 'Right Handed Batsman',
        matches : '223',
        trophy : '0',
        },
        {
          image : "https://c.ndtvimg.com/2022-04/9aj3f70o_hardik-pandya-bcciipl_625x300_13_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180?downsize=100:*",
          name : "Hardik Pandya",
          content : "Captain Of GT",
          position : 'Right Handed Batsman',
          matches : '107',
          trophy : '1',
          },  
         
  ];




  // data = {
  //   name:'codemind',
  //   dept :'ID'
  // }
  
    constructor(){
    }
    // onParent(val) {
    //   console.log("From child to parent: ", val);
      
    // }

    // onParentsss(newVal){
    //   console.log("the value of object is :", newVal);
      
    // }
  }


