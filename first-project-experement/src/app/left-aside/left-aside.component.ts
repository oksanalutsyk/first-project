import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../posts/posts.component';


@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss']
})
export class LeftAsideComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  title = ''
  text = ''
  postImg: string = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png'
  constructor() { }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        img: this.postImg
      }
      this.onAdd.emit(post)//send data
      console.log('New Post', post)
      this.title = this.text = ''
    }
  }

}
