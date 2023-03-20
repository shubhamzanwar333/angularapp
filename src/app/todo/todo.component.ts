import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  

  constructor(private todoService : TodoService) { }

  todoList:any=[];
  newTodo: string = '';
  ngOnInit() {
    this.listToDos();
  }

  createTodo(){
    let todo = {
      id : new Date().getTime(),
      title : this.newTodo
    }
    this.todoService.create(todo).subscribe(res =>{
      console.log('Todo create  method', res);
      this.listToDos();
      this.newTodo='';
    }, err => {

    })
  }


  listToDos(){
    this.todoService.list().subscribe(res=>{
      console.log(res);
      this.todoList=res;
    }, err =>{
      console.log(err);
      
    })
  }

  editToDo(todo:any){
    let  editData = {
      id: new Date().getTime(),
      title: `Edited Title`
    }
    this.todoService.update(todo.id, editData).subscribe(res =>{
      this.listToDos();
    })
  }

  deleteToDo(id : any){
    this.todoService.delete(id).subscribe(res =>{
      console.log('record has been deleted');
      this.listToDos();
    })
  }
}
