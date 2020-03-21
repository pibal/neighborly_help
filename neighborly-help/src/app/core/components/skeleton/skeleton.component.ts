import { Component } from '@angular/core';
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
}
