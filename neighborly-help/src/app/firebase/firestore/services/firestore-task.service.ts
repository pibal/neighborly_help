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

const STATE_FIELD_NAME = 'state';
const CREATOR_ID_FIELD_NAME = 'creatorID';

@Injectable()
export class FirestoreTaskService extends TaskApi {
  // TODO: get acceptor ID from auth context
  private creatorID: string = '2OJz93nFdYYM4cQTOcQokcgZwG63';
  private executorID: string = 'jslXfh1FYBbKr7PxOGvoj5zmkqt2';

  constructor(
    private database: AngularFirestore,
    private userAPiService: AppUserApi
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

  public getByCreatorAndStates(states: TaskState[]) {
    const firebaseStates = states.map(state => mapTaskStateToFirebase(state));
    const firestoreResponse = this.database
      .collection<FirebaseTask>(FirestoreCollectionsNames.TASK, ref =>
        ref
          .where(STATE_FIELD_NAME, 'in', firebaseStates)
          .where(CREATOR_ID_FIELD_NAME, '==', this.creatorID)
      )
      .valueChanges({ idField: 'id' });
    return <Observable<Task[]>>(
      firestoreResponse.pipe(
        map(firebaseHelpList =>
          firebaseHelpList.map(element => mapTaskFromFirebase(element))
        )
      )
    );
  }

  public get(id: string): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  public create(creationDTO: TaskCreationDTO): Observable<string> {
    const firebaseTask = createFirebaseTaskFromCreationDTO(
      creationDTO,
      this.creatorID
    );
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(taskCollection.add(firebaseTask)).pipe(map(res => res.id));
  }

  public accept(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );

    return this.userAPiService.get(this.executorID).pipe(
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
    return from(
      taskCollection.doc(id).update({
        state: TaskState.CANCELED,
      })
    );
  }
  public delete(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(
      taskCollection.doc(id).update({
        state: TaskState.DELETED,
      })
    );
  }
  public resign(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(
      taskCollection.doc(id).update({
        state: TaskState.RESIGNED,
        executorID: '',
        executorPhoneNumber: '',
      })
    );
  }
  public finishDone(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(
      taskCollection.doc(id).update({
        state: TaskState.DONE,
        rate: {
          rate: 3,
          comment: 'TEST COMMENT',
        },
      })
    );
  }
  public finishFail(id: string): Observable<any> {
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(
      taskCollection.doc(id).update({
        state: TaskState.FAILED,
      })
    );
  }
}
