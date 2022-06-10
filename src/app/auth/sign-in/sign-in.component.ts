import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() showSignInForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onRedirect($event: Event){
    $event.preventDefault();
    this.showSignInForm.emit(false);
  }

}
