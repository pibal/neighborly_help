import { Task } from 'src/app/model/task/task';
import { FirebaseTask } from '../firebase-model/firebase-task';
import { FirebaseAddress } from '../firebase-model/firebase-address';
import { Rate } from 'src/app/model/rate';
import { FirebaseRate } from '../firebase-model/firebase-rate';
import { ActivityType } from 'src/app/model/activity-type';
import { FirebaseActivityType } from '../firebase-model/firebase-activity-type';
import { FirebaseTaskState } from '../firebase-model/firebase-task-state';
import { TaskState } from 'src/app/model/task/task-state';
import { Coords } from 'src/app/model/coords';
import { firestore } from 'firebase';
import { Address } from 'src/app/model/address';

export function mapTaskFromFirebase(firebaseTask: FirebaseTask): Task {
  return {
    id: firebaseTask.id,
    creatorID: firebaseTask.creatorID,
    type: mapActivityTypeFromFirebase(firebaseTask.type),
    date: firebaseTask.date.toDate(),
    state: mapTaskStateFromFirebase(firebaseTask.state),
    details: firebaseTask.details,
    creatorPhoneNumber: firebaseTask.creatorPhoneNumber,
    localization: mapGeoPointToCoords(firebaseTask.localization),
    epidemicDanger: firebaseTask.epidemicDanger,
    address: mapAdressFromFirebase(firebaseTask.address),
    executorPhoneNumber: firebaseTask.executorPhoneNumber,
    executorID: firebaseTask.executorID,
    executionRate: mapRateFromFirebase(firebaseTask.executionRate),
  };
}

export function mapAdressFromFirebase(
  firebaseAddress: FirebaseAddress
): Address {
  return {
    region: firebaseAddress.region,
    city: firebaseAddress.city,
    street: firebaseAddress.street,
    postalCode: firebaseAddress.postalCode,
    local: firebaseAddress.local,
  };
}

export function mapAdressToFirebase(address: Address): FirebaseAddress {
  return {
    region: address.region,
    city: address.city,
    street: address.street,
    postalCode: address.postalCode,
    local: address.local,
  };
}

export function mapRateFromFirebase(firebaseRate: FirebaseRate): Rate {
  return firebaseRate
    ? {
        rate: firebaseRate.rate,
        comment: firebaseRate.comment,
      }
    : undefined;
}

export function mapActivityTypeFromFirebase(
  firebaseActivityType: FirebaseActivityType
): ActivityType {
  return <ActivityType>(<unknown>firebaseActivityType);
}

export function mapActivityTypeToFirebase(
  firebaseActivityType: ActivityType
): FirebaseActivityType {
  return <FirebaseActivityType>(<unknown>firebaseActivityType);
}

export function mapTaskStateFromFirebase(
  firebaseTaskState: FirebaseTaskState
): TaskState {
  return <TaskState>(<unknown>firebaseTaskState);
}

export function mapTaskStateToFirebase(
  firebaseTaskState: TaskState
): FirebaseTaskState {
  return <FirebaseTaskState>(<unknown>firebaseTaskState);
}

export function mapGeoPointToCoords(localization: firestore.GeoPoint): Coords {
  return {
    latitude: localization.latitude,
    longitude: localization.longitude,
  };
}
