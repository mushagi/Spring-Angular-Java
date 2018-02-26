import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import {Todo} from "./models/todo";
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})


export class AppComponent {
  title = 'app';
  showFiller = false;
  todos: Todo[] = [];
  toDoDetail: string = '';
  currentToDo : Todo = new Todo();
  area : HTMLTextAreaElement;
  constructor(private todoService : TodoService) {

  }

  public ngOnInit() {
    this.getAllToDos();
  }

  getAllToDos() {
    this.todoService.getAllToDos().subscribe(
      data => {
        this.todos = data;
      }
    );
  }

  renderDetail(todo) {
    this.currentToDo = todo;
    this.saveCurrentBody();
    console.log(todo);
  }

  saveCurrentBody() {
    console.log(this.toDoDetail + "changed");
    this.currentToDo.body = this.toDoDetail;

  }
}
