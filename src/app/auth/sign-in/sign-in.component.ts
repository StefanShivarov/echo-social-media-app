import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() showSignInForm = new EventEmitter<boolean>();
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  signInFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.signInFormGroup){
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  ngOnInit(): void {
  }

  onSignUpRedirect($event: Event){
    $event.preventDefault();
    this.showSignInForm.emit(false);
  }

  handleSignIn(): void{
    if(this.signInFormGroup.invalid){
      this.errorMessage = 'Invalid input data!';
      throw new Error('Invalid data!');
    }
    const { email, password } = this.signInFormGroup.value;
    this.authService.signIn$(email, password)
      .subscribe({
        error: (err) => {
          this.errorMessage = 'Wrong email or password!';
          console.error(err);
        },
        complete: () => this.router.navigate(['/'])
      });
      this.signInFormGroup.controls['password'].reset();
  }

}
