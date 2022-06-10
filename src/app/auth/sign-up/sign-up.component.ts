import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() showSignInForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onRedirect($event: Event){
    $event.preventDefault();
    this.showSignInForm.emit(true);
  }

}
