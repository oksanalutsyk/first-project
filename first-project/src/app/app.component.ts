import { Component } from '@angular/core';
import { Post } from './posts/posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  posts =[]

  updatePosts(newPost: Post) {
    this.posts.push(newPost)
    console.log(this.posts)
  }

}
