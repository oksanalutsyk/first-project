import { Component } from '@angular/core';
import { Post } from './posts/posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-project';
  posts = [];
  postId: any;
  showBlockId: any;
  isClear: boolean;

  updatePosts(newPosts: Post[]) {
    this.posts = newPosts;
  }
  sendId(postId: any) {
    this.postId = postId;
  }
  sendShowButtonsId(showId: any) {
    this.showBlockId = showId;
  }
  sendIsClearTrue(isClear: boolean) {
    this.isClear = isClear;
  }
}
