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

}
