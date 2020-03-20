import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/firebase/auth/authentication.service';
import { Credentials } from 'src/app/firebase/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'nh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onLogin(credentials: Credentials) {
    this.authService
      .login(credentials)
      .pipe(tap(_ => this.router.navigate([''])))
      .subscribe();
  }

  goToRegister() {
    this.router.navigate(['../register'], { relativeTo: this.route });
  }
}
