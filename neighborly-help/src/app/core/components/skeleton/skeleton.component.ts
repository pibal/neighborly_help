import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/firebase/auth';

@Component({
  selector: 'nh-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  isCollapsed = false;

  constructor(private authService: AuthenticationService) {}

  onLogout() {
    this.authService.logout().subscribe();
  }
}
