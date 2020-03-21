import { ActivityType } from '../activity-type';
import { TaskState } from './task-state';
import { Address } from '../address';
import { Rate } from '../rate';
import { Coords } from '../coords';

export interface Task {
  id: string;
  creatorID: string;
  type: ActivityType;
  date: Date;
  state: TaskState;
  details: string;
  creatorPhoneNumber: string;
  localization: Coords;
  epidemicDanger: boolean;
  address: Address;
  executorPhoneNumber?: string;
  executorID?: string;
  executionRate?: Rate;
}
