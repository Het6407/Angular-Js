import { Component, OnInit } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todos',
  standalone: true, 
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos : Todos[];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 3,
        title: "This is title",
        desc: "Description",
        active: true
      }
    ]
  }
}
