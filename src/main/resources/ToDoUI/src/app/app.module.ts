import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoService} from './services/todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import {
  MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCheckboxModule,
  MatSidenavModule, MatListModule, MatFormFieldModule, MatFormFieldControl
} from '@angular/material';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
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
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
