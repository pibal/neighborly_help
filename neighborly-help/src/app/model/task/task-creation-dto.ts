import { ActivityType } from '../activity-type';
import { Coords } from '../coords';
import { Address } from '../address';

export interface TaskCreationDTO {
  type: ActivityType;
  date: Date;
  details: string;
  creatorPhoneNumber: string;
  localization: Coords;
  epidemicDanger: boolean;
  address: Address;
}
