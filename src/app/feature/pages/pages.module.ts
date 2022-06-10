import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
