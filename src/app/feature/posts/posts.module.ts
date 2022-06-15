import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeedComponent,
    PostItemComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FeedComponent
  ]
})
export class PostsModule { }
