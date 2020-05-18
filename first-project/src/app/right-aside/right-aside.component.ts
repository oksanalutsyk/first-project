import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  AfterViewChecked,
} from '@angular/core';
import { Post } from '../posts/posts.component';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.scss'],
})
export class RightAsideComponent implements OnInit, AfterViewChecked {
  @Input() posts: Post[];
  @Input() labelPosition: 'after';
  @Output() onShowButtons: EventEmitter<string> = new EventEmitter<string>();
  @Output() sendIsClear: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChildren('resetRadio') resetRadio: QueryList<MatRadioButton>;

  isClear: boolean = false;
  id: any;
  radio;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.radio = this.resetRadio.toArray();
  }

  onClick(event): void {
    this.id = event.path[3].id;
    this.onShowButtons.emit(this.id);
  }

  resetRadioButtons(event) {
    this.radio.forEach((elem) => {
      elem._checked = false;
    });
    this.isClear = true;
    this.sendIsClear.emit(this.isClear);
  }
}
