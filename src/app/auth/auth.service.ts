import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }

  register(email: string, password: string) {
    return new Promise<any>(((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => resolve(res), error => reject(error));
    }));
  }

  login(email: string, password: string) {
    return new Promise<any>(((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => resolve(res), error => reject(error));
    }));
  }

  logout() {
    return new Promise<any>(((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => resolve(res), error => reject(error));
    }));
  }
}
