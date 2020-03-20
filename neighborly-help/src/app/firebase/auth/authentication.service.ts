import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials } from '.';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NhUser } from './dto/nh-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private fbAuthService: AngularFireAuth, private router: Router) {}

  get isLoggedIn(): Observable<boolean> {
    return this.fbAuthService.authState.pipe(map(loggedUser => !!loggedUser));
  }

  login(credentials: Credentials): Observable<NhUser> {
    const { username, password } = credentials;

    return from(
      this.fbServiceInstance.signInWithEmailAndPassword(username, password)
    ).pipe(
      map((firebaseUser: firebase.auth.UserCredential) =>
        this.mapToNhUser(firebaseUser)
      )
    );
  }

  register(credentials: Credentials): Observable<NhUser> {
    return from(
      this.fbServiceInstance.createUserWithEmailAndPassword(
        credentials.username,
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

  private get fbServiceInstance() {
    return this.fbAuthService.auth;
  }

  private mapToNhUser(firebaseUser: firebase.auth.UserCredential): NhUser {
    return {
      name: firebaseUser.user.displayName,
    };
  }
}
