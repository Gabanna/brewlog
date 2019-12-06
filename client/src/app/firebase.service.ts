import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

private app: firebase.app.App;
private provider: firebase.auth.GoogleAuthProvider;

  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.app = firebase.initializeApp(environment.firebase);
  }

  public async signIn(): Promise<void> {
    return await firebase.auth().signInWithRedirect(this.provider);
  }

  public userInfo(): Promise<firebase.auth.UserCredential> {
    return firebase.auth().getRedirectResult();
  }

  public onAuthStateChanged(callback: (user: firebase.User) => void) {
      firebase.auth().onAuthStateChanged(callback);
  }

  public async logout(): Promise<void> {
    firebase.auth().signOut();
  }
}
