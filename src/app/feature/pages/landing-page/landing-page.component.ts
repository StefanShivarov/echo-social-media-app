import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user$ = this.userService.currentUserProfile$;
  loading: boolean = false;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void{
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 1000);
  }
}
