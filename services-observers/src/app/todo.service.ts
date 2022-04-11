import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: String[] = [];
  private count = 1;

  constructor(private http: HttpClient) { }

  getTodo(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/'+this.count++).subscribe((todo: any)=>{
      this.todos.push(todo.title);
    });
  }

}
