import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../feature/posts/posts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PagesModule } from '../feature/pages/pages.module';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PostsModule,
    ReactiveFormsModule,
  ],
  exports:[
    SignUpComponent,
    SignInComponent
  ]
})
export class AuthModule { }
