import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials } from '.';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NhUser } from './dto/nh-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  _isLoggedIn = false;
  constructor(private fbAuthService: AngularFireAuth, private router: Router) {}
  get isLoggedIn(): Observable<boolean> {
    if (!this._isLoggedIn) {
      return this.fbAuthService.authState.pipe(
        map(loggedUser => !!loggedUser),
        tap(_ => (this._isLoggedIn = true))
      );
    } else {
      return of(true);
    }
  }

  login(credentials: Credentials): Observable<NhUser> {
    const { email, password } = credentials;

    return from(
      this.fbServiceInstance.signInWithEmailAndPassword(email, password)
    ).pipe(
      map((firebaseUser: firebase.auth.UserCredential) =>
        this.mapToNhUser(firebaseUser)
      )
    );
  }

  register(credentials: Credentials): Observable<NhUser> {
    return from(
      this.fbServiceInstance.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      map((firebaseUser: firebase.auth.UserCredential) =>
        this.mapToNhUser(firebaseUser)
      )
    );
  }

  logout(): Observable<void> {
    return from(this.fbServiceInstance.signOut()).pipe(
      tap(_ => {
        this.router.navigate(['/', 'auth', 'login']);
      })
    );
  }

  getUID(): Observable<string> {
    return this.fbAuthService.user.pipe(map(user => user.uid));
  }

  private get fbServiceInstance() {
    return this.fbAuthService.auth;
  }

  private mapToNhUser(firebaseUser: firebase.auth.UserCredential): NhUser {
    return {
      name: firebaseUser.user.displayName,
    };
  }
}
