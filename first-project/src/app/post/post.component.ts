import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Post } from '../posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnChanges {
  @Input() post: Post;
  @Input() showId: any;
  @Output() onDel: EventEmitter<string> = new EventEmitter<string>();

  postImg: string =
    'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';
  id = '';
  showButton: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.showId && changes.showId) {
      if (changes.showId.currentValue != changes.showId.previousValue) {
        this.showButton = changes.showId.currentValue;
      }
    }
  }
  ngOnInit(): void {}

  onClick(event) {
    this.id = event.target.id;
    this.onDel.emit(this.id); //send data
  }
}
