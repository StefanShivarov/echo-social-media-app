import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, private authService: AuthService) { }

  createUser$(user: IUser) {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(setDoc(ref, user));
  }

  get currentUserProfile$(): Observable<IUser | null> {
    return this.authService.currentUser$
      .pipe(
        switchMap((user) => {
          if (!user?.uid) {
            return of(null);
          }
          const ref = doc(this.firestore, 'users', user?.uid);
          return docData(ref) as Observable<IUser>;
        })
      );
  }
}
