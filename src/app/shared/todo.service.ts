import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly APIUrl = "https://localhost:44328/api";

  constructor(private http: HttpClient) { }

  getToDoList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ToDo');
  }

  addToDoItem(val: any) {
    return this.http.post(this.APIUrl + '/ToDo', val);
  }

  updateToDoItem(val: any) {
    return this.http.put(this.APIUrl + '/ToDo', val);
  }

  deleteToDoItem(val: any) {
    return this.http.delete(this.APIUrl + '/ToDo/' + val);
  }
}
