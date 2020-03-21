import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../firebase/auth';
import { tap } from 'rxjs/operators';
import { RoutesEnum } from '../enums';

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
        if (!x) this.router.navigate(['/', RoutesEnum.Auth]);
      })
    );
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
