import { FirebaseTask } from '../firebase-model/firebase-task';
import { TaskCreationDTO } from 'src/app/model/task/task-creation-dto';
import {
  mapActivityTypeToFirebase,
  mapAdressToFirebase,
} from './firebase-object-mappers';
import { firestore } from 'firebase';
import { FirebaseTaskState } from '../firebase-model/firebase-task-state';

export function createFirebaseTaskFromCreationDTO(
  creationDTO: TaskCreationDTO,
  userID: string
): FirebaseTask {
  return {
    creatorID: userID,
    type: mapActivityTypeToFirebase(creationDTO.type),
    date: firestore.Timestamp.fromDate(creationDTO.date),
    state: FirebaseTaskState.REQUESTED,
    details: creationDTO.details,
    creatorPhoneNumber: creationDTO.creatorPhoneNumber,
    localization: new firestore.GeoPoint(
      creationDTO.localization.latitude,
      creationDTO.localization.longitude
    ),
    epidemicDanger: creationDTO.epidemicDanger,
    address: mapAdressToFirebase(creationDTO.address),
  };
}
