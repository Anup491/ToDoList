import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddTaskItemsComponent } from './tasks/add-task-items/add-task-items.component';
import { LoginComponent } from './public/login.component';
import { InfoMessageComponent } from './shared/messaging/info-message.component';
import { ValidationMessageComponent } from './shared/messaging/validation-message.component';
import { ExceptionMessageComponent } from './shared/messaging/exception-message.component';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskItemsComponent,
    LoginComponent,
    InfoMessageComponent,
    ValidationMessageComponent,
    ExceptionMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
