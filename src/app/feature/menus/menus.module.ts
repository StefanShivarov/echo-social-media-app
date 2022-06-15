import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    FriendsListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FriendsListComponent
  ]
})
export class MenusModule { }
