import { Component, OnInit } from '@angular/core';
import { Box } from './models/object';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  box1: Box[] = [] 

  constructor() { }
  
  box: Box[] = [
    {
      id: 0 ,
      firstName: "First Post",
      secondName: "Welcome to your first Angular Exercise",
      date : new Date(12,1927)
    },
    {
      id: 1,
      firstName: "Second Post",
      secondName: "This is a test post",
      date: new Date(12,1927)
    }
  ]

  ngOnInit(): void {
  }
  
}
