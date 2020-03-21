import { firestore } from 'firebase';

export interface AppUser {
  uid: string;
  phoneNumber: string;
  defaultLocalization: firestore.GeoPoint;
  displayName: string;
}
