import { Component } from '@angular/core';
import { AuthenticationService, Credentials } from 'src/app/firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { RoutesEnum } from 'src/app/enums';

@Component({
  selector: 'nh-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onRegister(credentials: Credentials) {
    this.authService
      .register(credentials)
      .pipe(
        tap(_ => {
          this.router.navigate(['']);
        })
      )
      .subscribe();
  }

  onCancel() {
    this.router.navigate([`../${RoutesEnum.Login}`], {
      relativeTo: this.route,
    });
  }
}
