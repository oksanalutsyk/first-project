import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { RightAsideComponent } from './right-aside/right-aside.component';
import { MainComponent } from './main/main.component';

//modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    LeftAsideComponent,
    RightAsideComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
