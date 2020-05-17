import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../posts/posts.component';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.scss'],
})
export class RightAsideComponent implements OnInit {
  @Input() posts: Post[];
  @Input() labelPosition: 'after';
  @Output() onShowButtons: EventEmitter<string> = new EventEmitter<string>();

  isChecked: boolean;
  id: any;

  constructor() {
    this.isChecked = false;
  }

  ngOnInit(): void {}

  onClick(event): void {
    this.id = event.path[3].id;
    this.onShowButtons.emit(this.id);
  }
}
