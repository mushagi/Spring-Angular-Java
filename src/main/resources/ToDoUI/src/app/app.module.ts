import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoService} from './services/todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCheckboxModule,
  MatSidenavModule, MatListModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatDialogModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateTodoDialogComponent } from './custom_components/create-todo-dialog/create-todo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    CreateTodoDialogComponent
  ],
  entryComponents: [AppComponent, CreateTodoDialogComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
