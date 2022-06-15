import { Injectable } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { from, Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: Firestore) { }

  createPost$(post: IPost): Observable<any>{
    const ref = doc(this.firestore, 'posts');
    return from(setDoc(ref, post));
  }
}
