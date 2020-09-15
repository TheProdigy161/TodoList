import { TodoListService } from './../../services/todo-list.service';
import { TodoItem } from './../../models/todoItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoData: TodoItem;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
  }

  onClickDelete(): void {
    this.todoListService.removeTodoItem(this.todoData.id);
  }
}
