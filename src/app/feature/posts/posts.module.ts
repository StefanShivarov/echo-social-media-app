import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { PostItemComponent } from './post-item/post-item.component';



@NgModule({
  declarations: [
    FeedComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedComponent
  ]
})
export class PostsModule { }
