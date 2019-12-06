import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private provider: firebase.auth.GoogleAuthProvider;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.provider = new auth.GoogleAuthProvider();
    this.provider.setCustomParameters({
      prompt: 'select_account'
    });
  }

  public async signIn(): Promise<void> {
    return await this.afAuth.auth.signInWithRedirect(this.provider);
  }

  public userInfo(): firebase.User {
    console.info("current user", this.afAuth.auth.currentUser)
    return this.afAuth.auth.currentUser;
  }

  public onAuthStateChanged(callback: (user: firebase.User) => void) {
    this.afAuth.auth.onAuthStateChanged(callback);
  }

  public getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const user = this.userInfo();
      if(!user) {
        console.info("retry");
        setTimeout(() => {
          this.getToken()
          .then(u => resolve(u))
          .catch(e => reject(e));
        }, 200);
      } else {
        user.getIdToken()
          .then(t => resolve(t))
          .catch(e => reject(e));
      }
    });
  }

  public async logout(): Promise<void> {
    this.afAuth.auth.signOut();
  }

  public updateCurrentUser(user: firebase.User): Promise<void> {
    return this.afAuth.auth.updateCurrentUser(user);
  }

  public handeLoginState(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.afAuth.auth.getRedirectResult()
            .then(() => resolve())
            .catch(error => reject(error));
        } else {
          this.afAuth.auth.signInWithRedirect(this.provider);
        }
      });
    });
  }
}
