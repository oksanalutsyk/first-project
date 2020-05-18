import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export interface Post {
  title: string;
  body: string;
  img?: string;
  id?: number;
  checked?:boolean
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnChanges {
  @Input() posts: Post[];
  @Input() showBlockId: any[];
  @Input() isClear: boolean;
  @Output() onDel: EventEmitter<string> = new EventEmitter<string>();

  postImg: string =
    'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';
  postsLength: string;
  postId: any;
  showId:any;
  isClearValue:boolean

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.showBlockId && changes.showBlockId){
      if (changes.showBlockId.currentValue != changes.showBlockId.previousValue){
        this.showId=changes.showBlockId.currentValue
      }
    }

    if (this.isClear && changes.isClear){
      if (changes.isClear.currentValue != changes.isClear.previousValue){
        this.isClearValue=changes.isClear.currentValue
      }
    }
  }
  ngOnInit(): void {
  }

  sendId(postId: any) {
    this.postId = postId;
    this.onDel.emit(this.postId); //send data
  }

}
