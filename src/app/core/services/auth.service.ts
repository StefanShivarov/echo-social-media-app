import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  signIn$(email: string, password: string): Observable<any>{
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp$(email: string, password: string): Observable<UserCredential>{
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  signOut$(): Observable<any>{
    return from(this.auth.signOut());
  }
}
