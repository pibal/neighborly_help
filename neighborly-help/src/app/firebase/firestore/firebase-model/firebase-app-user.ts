import { firestore } from 'firebase';

export interface FirebaseAppUser {
  uid: string;
  phoneNumber: string;
  defaultLocalization: firestore.GeoPoint;
  displayName: string;
}
