import { TodoListService } from './../../services/todo-list.service';
import { TodoItem } from './../../models/todoItem';
import { Component, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/models/interfaces/todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItemTitle: string = '';

  constructor(public todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addNewTodoItem(event: any): void {
    if (event.key !== 'Enter')
      return;

    if (!this.todoItemTitle)
      return;

    const todoData: ITodoItem = {
      title: this.todoItemTitle
    };

    this.todoListService.addTodoItem(new TodoItem(todoData));
    this.todoItemTitle = '';
  }
}
