import { Injectable } from '@angular/core';
import { networkInterfaces } from 'os';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem } from '../models/todoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private _todoList: BehaviorSubject<TodoItem[]> = new BehaviorSubject([new TodoItem({id: 1, title: 'Test'}), new TodoItem({id: 2, title: 'Test'})]);

  public readonly todoList$: Observable<TodoItem[]> = this._todoList.asObservable();

  constructor() { }

  getTodoList(): TodoItem[] {
    return this._todoList.getValue();
  }

  addTodoItem(item: TodoItem): void {
    const newIndex: number = this.getNextIndex();
    item.setId(newIndex);

    const currentTodoList: TodoItem[] = this.getTodoList();
    currentTodoList.push(item);

    this._todoList.next(currentTodoList);
  }

  removeTodoItem(id: number): void {
    this._todoList.next(this.getTodoList().filter(x => x.id !== id));
  }

  private getNextIndex(): number {
    const currentTodoList: TodoItem[] = this.getTodoList();
    if (currentTodoList.length === 0)
      return 1;

    const lastIndex: number = currentTodoList.sort(x => x.id)[currentTodoList.length - 1].id;

    return lastIndex + 1;
  }
}
