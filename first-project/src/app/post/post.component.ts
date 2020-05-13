import { Component, OnInit, Input } from '@angular/core';

export interface Post{
  title: string;
  img:string;
  id?:number
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postImg: string = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png'
  posts:Post[] = [
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
