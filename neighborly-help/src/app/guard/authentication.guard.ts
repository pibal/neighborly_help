import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../firebase/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivateChild {
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      tap(x => {
        console.log('isLogged::', x);
        if (!x) this.router.navigate(['/', 'auth', 'login']);
      })
    );
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
