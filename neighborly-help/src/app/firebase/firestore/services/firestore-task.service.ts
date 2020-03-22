import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Task } from 'src/app/model/task/task';
import { FirestoreCollectionsNames } from '../enum/firestore-collections-names';
import { FirebaseTask } from '../firebase-model/firebase-task';
import { map, switchMap } from 'rxjs/operators';
import {
  mapTaskFromFirebase,
  mapTaskStateToFirebase,
} from '../utils/firebase-object-mappers';
import { TaskCreationDTO } from 'src/app/model/task/task-creation-dto';
import { TaskApi } from 'src/app/api/task-api';
import { createFirebaseTaskFromCreationDTO } from '../utils/firebase-object-factory';
import { AppUserApi } from 'src/app/api/app-user-api';
import { TaskState } from 'src/app/model/task/task-state';
import { AuthenticationService } from 'src/app/firebase/auth/authentication.service';

const STATE_FIELD_NAME = 'state';
const CREATOR_ID_FIELD_NAME = 'creatorID';

@Injectable()
export class FirestoreTaskService extends TaskApi {
  // TODO: get acceptor ID from auth context

  constructor(
    private database: AngularFirestore,
    private userAPiService: AppUserApi,
    private authService: AuthenticationService
  ) {
    super();
  }
  // TODO: Add request options
  public getAll(): Observable<Task[]> {
    const firestoreResponse: Observable<FirebaseTask[]> = this.database
      .collection<FirebaseTask>(FirestoreCollectionsNames.TASK)
      .valueChanges({ idField: 'id' });

    return <Observable<Task[]>>(
      firestoreResponse.pipe(
        map(firebaseHelpList =>
          firebaseHelpList.map(element => mapTaskFromFirebase(element))
        )
      )
    );
  }

  public getByCreatorAndStates(states: TaskState[]): Observable<Task[]> {
    const firebaseStates = states.map(state => mapTaskStateToFirebase(state));
    return this.authService.getUID().pipe(
      map(uid =>
        this.database.collection<FirebaseTask>(
          FirestoreCollectionsNames.TASK,
          ref =>
            ref
              .where(STATE_FIELD_NAME, 'in', firebaseStates)
              .where(CREATOR_ID_FIELD_NAME, '==', uid)
        )
      ),
      switchMap(collection =>
        collection
          .valueChanges({ idField: 'id' })
          .pipe(
            map(firebaseHelpList =>
              firebaseHelpList.map(element => mapTaskFromFirebase(element))
            )
          )
      )
    );
  }

  public get(id: string): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  public create(creationDTO: TaskCreationDTO): Observable<string> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      map(uid => createFirebaseTaskFromCreationDTO(creationDTO, uid)),
      switchMap(task => from(taskCollection.add(task)).pipe(map(res => res.id)))
    );
  }

  public accept(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );

    return this.authService.getUID().pipe(
      switchMap(uid => this.userAPiService.get(uid)),
      switchMap(appUser => {
        return from(
          taskCollection.doc(id).update({
            state: TaskState.ACCEPTED,
            executorPhoneNumber: appUser.phoneNumber,
            executorID: appUser.uid,
          })
        );
      })
    );
  }

  public cancel(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      switchMap(uid =>
        from(
          taskCollection.doc(id).update({
            state: TaskState.CANCELED,
          })
        )
      )
    );
  }
  public delete(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      switchMap(uid =>
        from(
          taskCollection.doc(id).update({
            state: TaskState.DELETED,
          })
        )
      )
    );
  }
  public resign(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      switchMap(uid =>
        from(
          taskCollection.doc(id).update({
            state: TaskState.RESIGNED,
            executorID: '',
            executorPhoneNumber: '',
          })
        )
      )
    );
  }

  public finishDone(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      switchMap(uid =>
        from(
          taskCollection.doc(id).update({
            state: TaskState.DONE,
            rate: {
              rate: 3,
              comment: 'TEST COMMENT',
            },
          })
        )
      )
    );
  }

  public finishFail(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return this.authService.getUID().pipe(
      switchMap(uid =>
        from(
          taskCollection.doc(id).update({
            state: TaskState.DONE,
            rate: {
              rate: 3,
              comment: 'TEST COMMENT',
            },
          })
        )
      )
    );
  }
}
