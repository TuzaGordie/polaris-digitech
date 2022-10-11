import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  searchString = '';
  p: number = 1;
  numberOfItems: number = 10;

  todos: any[] = [];

  slelected ='All'

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

getTodos() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
    });
  }


}
