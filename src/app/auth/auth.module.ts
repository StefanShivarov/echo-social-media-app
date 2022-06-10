import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../feature/posts/posts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PostsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
