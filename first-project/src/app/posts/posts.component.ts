import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Post {
  title: string;
  body: string;
  img?: string;
  id?: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[];
  @Output() onDel: EventEmitter<string> = new EventEmitter<string>();

  postImg: string =
    'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';
  postsLength: string;
  postId: any;

  constructor() {}

  ngOnInit(): void {}

  sendId(postId: any) {
    this.postId = postId;
    this.onDel.emit(this.postId); //send data
  }
}
