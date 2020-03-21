import { Injectable } from '@angular/core';
import { AppUserApi } from 'src/app/api/app-user-api';
import { Observable, from } from 'rxjs';
import { AppUser } from 'src/app/model/app-user';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAppUser } from '../firebase-model/firebase-app-user';
import { FirestoreCollectionsNames } from '../enum/firestore-collections-names';
import { map, catchError } from 'rxjs/operators';
import {
  mapAppUserToFirebase,
  mapAppUserFromFirebase,
} from '../utils/firebase-object-mappers';

const APP_USER_UID_FIELD_NAME = 'uid';

@Injectable()
export class FirestoreAppUserService extends AppUserApi {
  constructor(private database: AngularFirestore) {
    super();
  }

  // TODO: Export this feature to cloud fuctions to ensure data consistency
  public create(user: AppUser): Observable<string> {
    const firebaseAppUser: FirebaseAppUser = mapAppUserToFirebase(user);
    const taskCollection = this.database.collection<FirebaseAppUser>(
      FirestoreCollectionsNames.APP_USER
    );
    return from(taskCollection.add(firebaseAppUser)).pipe(map(res => res.id));
  }

  public update(uid: string): Observable<string> {
    throw new Error('Method not implemented.');
  }
  public get(uid: string): Observable<AppUser> {
    const firestoreResponse: Observable<FirebaseAppUser> = this.database
      .collection<FirebaseAppUser>(FirestoreCollectionsNames.APP_USER, ref =>
        ref.limit(1)
      )
      .valueChanges()
      .pipe(map(list => list[0]));

    return firestoreResponse.pipe(
      map(firestoreUser => {
        if (!firestoreUser) {
          throw new Error(
            `User with id: ${uid} does not exist in system or you are not authorized to get this data`
          );
        }
        return mapAppUserFromFirebase(firestoreUser);
      })
    );
  }
}
