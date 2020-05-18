import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Post } from '../posts/posts.component';
import { PostService } from '../services/post-services.service';

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss'],
})
export class LeftAsideComponent implements OnInit, OnChanges {
  @Output() onAdd: EventEmitter<Post[]> = new EventEmitter<Post[]>();
  @Input() postId: string;

  title = '';
  body = '';
  id = '';
  postImg: string =
    'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';
  posts: Post[] = [];
  delId: any;

  ngOnChanges(changes: SimpleChanges) {
    this.delId = changes.postId.currentValue;
    console.log(this.delId);
    this.deletePost(this.delId);
  }

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts(); //get data from API

    this.onAdd.emit(this.posts); //send data to appComponent
  }

  deletePost(id) {
    this.posts.filter((elem, i) => {
      if (elem.id == id) return this.posts.splice(i, 1);
    });
  }

  public getPosts(): void {
    this.postService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
        this.onAdd.emit(this.posts); //send data
      },
      (err) => {
        console.error(err);
      }
    );
  }

  addPost(): void {
    if (this.body.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        body: this.body,
        img: this.postImg,
        id: Date.now(),
        checked: false,
      };
      this.posts.unshift(post);
      this.onAdd.emit(this.posts); //send data
      this.title = this.body = '';
    }
  }
}
