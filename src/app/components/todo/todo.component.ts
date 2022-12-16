import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: string[] = [];
  todo: string = '';

  addTodo() {
    this.todos.push(this.todo);
  }
  deleteTask(index: number) {
    this.todos.splice(index, 1);
    console.log(index);
  }
}
