import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsListComponent } from './friends-list/friends-list.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    FriendsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent
  ]
})
export class MenusModule { }
