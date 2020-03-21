import { FirebaseActivityType } from './firebase-activity-type';
import { firestore } from 'firebase';
import { FirebaseTaskState } from './firebase-task-state';
import { FirebaseAddress } from './firebase-address';
import { FirebaseRate } from './firebase-rate';

export interface FirebaseTask {
  id?: string;
  creatorID: string;
  type: FirebaseActivityType;
  date: firestore.Timestamp;
  state: FirebaseTaskState;
  details: string;
  creatorPhoneNumber: string;
  localization: firestore.GeoPoint;
  epidemicDanger: boolean;
  address: FirebaseAddress;
  executorPhoneNumber?: string;
  executorID?: string;
  executionRate?: FirebaseRate;
}
