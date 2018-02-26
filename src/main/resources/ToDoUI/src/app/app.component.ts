import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import {Todo} from "./models/todo";
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {CreateTodoDialogComponent} from "./custom_components/create-todo-dialog/create-todo-dialog.component";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

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

  bodyTilte : Subject<string>  = new Subject();

  constructor(private todoService : TodoService,private formBuilder: FormBuilder, private matDialogue : MatDialog) {
  }

  openDialog(): void {
    let dialogRef = this.matDialogue.open(CreateTodoDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.length > 0) {
        this.currentToDo = new Todo();
        this.currentToDo.title = result;
        this.addAToDo()
      }
    });
  }

  public ngOnInit() {
    this.getAllToDos();
    this.bodyTilte.distinctUntilChanged().debounceTime(500).subscribe(data => {
      this.saveCurrentBody();
    });
  }

  getAllToDos() {
    this.todoService.getAllToDos().subscribe(
      data => {
        this.currentToDo = data[0];
        this.todos = data;
      }
    );
  }

  addAToDo() {
    this.todoService.addToDo(this.currentToDo).subscribe(
      data => {
        this.todos = data;
        console.log(data);
      }
    );
  }

  deleteAToDo(todo) {
    this.todoService.removeToDo(todo).subscribe(
      data => {
        this.todos = data;
      }
    );
  }

  renderDetail(todo) {
    this.currentToDo = todo;
    this.toDoDetail = this.currentToDo.body;
  }


  saveCurrentBody() {

    this.currentToDo.body = this.toDoDetail;
     this.todoService.saveToDo(this.currentToDo).subscribe(
      data => {
        this.todos = data;
      }
    );
  }

  saveTitleBody(){
    this.bodyTilte.next(this.toDoDetail);
  }
}
