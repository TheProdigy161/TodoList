import { TodoItem } from './../../models/todoItem';
import { Component, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/models/interfaces/todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [new TodoItem({title: 'Test'}), new TodoItem({title: 'Test'})];
  todoItemTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNewTodoItem(event: any): void {
    if (event.key !== 'Enter')
      return;

    const todoData: ITodoItem = {
      title: this.todoItemTitle
    };

    this.todoList.push(new TodoItem(todoData));
    this.todoItemTitle = '';
  }
}
