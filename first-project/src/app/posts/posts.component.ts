import { Component, OnInit, Input } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  img: string;
  id?: number
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[]

  postImg: string = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png'
  postsLength:string
  constructor() { }

  ngOnInit(): void {
  }

}
