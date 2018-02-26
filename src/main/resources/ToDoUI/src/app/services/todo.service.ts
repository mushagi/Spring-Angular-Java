import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { environment } from '../../environments/environment';

import {} from '';
import {Observable} from "rxjs/Observable";
import {Config} from "codelyzer";
import {observable} from "rxjs/symbol/observable";

const API_URL = environment.API_URL;

@Injectable()
export class TodoService {

  constructor(private http : HttpClient) { }

  getAllToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL, {responseType: 'json'});
  }

  saveToDo(currentToDo: Todo) : Observable<Todo[]> {
    return this.http.put<Todo[]>(API_URL + "/update", currentToDo,{responseType: 'json'});
  }

  addToDo(currentToDo: Todo) : Observable<Todo[]>{
    return this.http.post<Todo[]>(API_URL + "/insert", currentToDo,{responseType: 'json'});
  }

  removeToDo(currentToDo: Todo) : Observable<Todo[]>{
    return this.http.delete<Todo[]>(API_URL + "/delete/" + currentToDo.id,{responseType: 'json'});
  }
}
