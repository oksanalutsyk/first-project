import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.scss']
})
export class RightAsideComponent implements OnInit {
  typesOfShoes: string[] = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
    'Post 5'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
