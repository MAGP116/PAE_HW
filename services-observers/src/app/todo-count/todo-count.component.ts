import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.css']
})
export class TodoCountComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

}
