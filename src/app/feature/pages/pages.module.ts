import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenusModule } from '../menus/menus.module';
import { AuthModule } from 'src/app/auth/auth.module';



@NgModule({
  declarations: [
    DashboardComponent,
    WelcomePageComponent,
    ProfileComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MenusModule,
  ],
  exports:[
    WelcomePageComponent
  ]
})
export class PagesModule { }
