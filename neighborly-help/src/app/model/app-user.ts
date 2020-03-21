import { firestore } from 'firebase';
import { Coords } from './coords';

export interface AppUser {
  uid: string;
  phoneNumber: string;
  defaultLocalization: Coords;
  displayName: string;
}
