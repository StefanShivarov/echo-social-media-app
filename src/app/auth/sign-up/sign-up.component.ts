import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { profile } from 'console';
import { finalize, pipe, switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { passwordsMatch } from '../util';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() showSignInForm = new EventEmitter<boolean>();
  selectedFileName: string = '';
  selectedFile: any = null;
  profilePictureUrl: string = '';

  constructor(private storage: Storage, private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService, private userService: UserService) { }

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  signUpFormGroup: FormGroup = this.formBuilder.group({
    'firstName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'lastName': new FormControl(null, [Validators.required, Validators.minLength(2)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'pictureFile': new FormControl(null, [Validators.required]),
    'birthDate': new FormControl(null, [Validators.required]),
    'country': new FormControl(null, [Validators.required]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repeatPassword': new FormControl(null, [Validators.required, passwordsMatch(this.passwordControl)])
    })
  })

  get passwordsGroup(): FormGroup {
    return this.signUpFormGroup.controls['passwords'] as FormGroup;
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.signUpFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid;
  }

  ngOnInit(): void {
  }

  onFileSelected($event: any) {
    console.log($event.target.files[0]);
    if ($event.target.files[0] === undefined) {
      this.selectedFile = null;
      this.selectedFileName = 'No file selected.';
    } else {
      this.selectedFile = $event.target.files[0];
      this.selectedFileName = $event.target.files[0].name;
    }
  }

  onSignInRedirect($event: Event) {
    $event.preventDefault();
    this.showSignInForm.emit(true);
  }

  handleSignUp(): void {
    if (this.signUpFormGroup.invalid) {
      throw new Error('Invalid data');
    }

    const { firstName, lastName, email, pictureFile, birthDate, country, passwords } = this.signUpFormGroup.value;
    const password = passwords.password;


    if (this.selectedFile) {
      const storageRef = ref(this.storage, `/profile_pictures/${Date.now()}_${this.selectedFileName}`);
      uploadBytesResumable(storageRef, this.selectedFile)
        .then((snapshot) => {
          console.log(snapshot);
        })
        .catch(err => console.log(err))
        .finally(() => {
          getDownloadURL(storageRef).then((profilePictureUrl) => {
            console.log(profilePictureUrl);
            this.authService.signUp$(email, password)
              .pipe(
                switchMap(({ user: { uid } }) =>
                  this.userService.createUser$({ uid, email, firstName, lastName, birthDate, country, profilePictureUrl })
                )
              ).subscribe(() => {
                this.router.navigate(['/'])
              });
          });
        })
    }

  }

}
