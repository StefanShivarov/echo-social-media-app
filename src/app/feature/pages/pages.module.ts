import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenusModule } from '../menus/menus.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent,
    WelcomePageComponent,
    ProfileComponent,
    LandingPageComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    MenusModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    WelcomePageComponent
  ]
})
export class PagesModule { }
