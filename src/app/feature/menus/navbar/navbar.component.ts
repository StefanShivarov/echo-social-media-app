import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showProfileDropdown: boolean = false;
  showMobileMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onProfileDropdownToggle(): void{
    this.showProfileDropdown = !this.showProfileDropdown;
  }

  onMobileMenuToggle(): void{
    this.showMobileMenu = !this.showMobileMenu;
  }

}
