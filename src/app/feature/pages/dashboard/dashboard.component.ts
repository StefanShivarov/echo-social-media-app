import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$ = this.userService.currentUserProfile$;

  constructor(private userService: UserService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signOut$();
    this.router.navigate(['/']);
    this.user$.subscribe((val) => console.log(val));
  }

}
