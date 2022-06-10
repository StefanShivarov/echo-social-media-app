import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
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
