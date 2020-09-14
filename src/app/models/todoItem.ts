import { DateUtilities } from './../core/dateUtilities';
import { ITodoItem } from './interfaces/todoItem';

export class TodoItem implements ITodoItem {
  title: string = 'Not provided.';
  creationDate: Date;
  completed: boolean;

  constructor(data?: ITodoItem) {
    if (data !== undefined) {
      this.title = data.title;
      this.completed = data.completed;
    }

    this.creationDate = DateUtilities.GetCurrentUTCDate();
  }
}
