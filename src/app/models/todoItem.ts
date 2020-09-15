import { DateUtilities } from './../core/dateUtilities';
import { ITodoItem } from './interfaces/todoItem';

export class TodoItem implements ITodoItem {
  id: number;
  title: string = 'Not provided.';
  creationDate: Date;
  completed: boolean;

  constructor(data?: ITodoItem) {
    this.creationDate = DateUtilities.GetCurrentUTCDate();

    if (data !== undefined) {
      this.title = data.title;
      this.id = data.id;
      this.completed = data.completed;
      this.creationDate = data.creationDate;
    }
  }

  setId(newId: number): void {
    this.id = newId;
  }
}
