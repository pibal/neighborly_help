import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/firebase/auth';
import {
  getNeedHelpAddTaskUrl,
  getNeedHelpSubmittedTasksUrl,
  getOfferHelpAcceptedTasksUrl,
  getOfferHelpSearchTaskUrl,
} from '../../../enums';

@Component({
  selector: 'nh-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  searchTasksUrl = getOfferHelpSearchTaskUrl;
  acceptedTasksUrl = getOfferHelpAcceptedTasksUrl;
  addTaskUrl = getNeedHelpAddTaskUrl;
  submittedTasks = getNeedHelpSubmittedTasksUrl;

  isCollapsed = false;

  constructor(private authService: AuthenticationService) {}

  onLogout() {
    this.authService.logout().subscribe();
  }
}
