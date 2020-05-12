import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  postImg: string = 'http://shorturl.at/cJPR3'
  posts = [
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    },
    {
      title: 'Post title',
      img: this.postImg
    }
  ]
}
