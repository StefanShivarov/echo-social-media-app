import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../feature/menus/navbar/navbar.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return{
      ngModule: CoreModule,
      providers: [
        UserService,
        AuthService,
        PostService,
      ]
    }
  }
}
