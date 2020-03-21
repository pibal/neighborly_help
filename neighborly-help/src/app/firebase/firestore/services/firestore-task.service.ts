import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Task } from 'src/app/model/task/task';
import { FirestoreCollectionsNames } from '../enum/firestore-collections-names';
import { FirebaseTask } from '../firebase-model/firebase-task';
import { first, map, switchAll, switchMap } from 'rxjs/operators';
import { mapTaskFromFirebase } from '../utils/firebase-object-mappers';
import { TaskCreationDTO } from 'src/app/model/task/task-creation-dto';
import { TaskApi } from 'src/app/api/task-api';
import { createFirebaseTaskFromCreationDTO } from '../utils/firebase-object-factory';
import { AppUserApi } from 'src/app/api/app-user-api';
import { TaskState } from 'src/app/model/task/task-state';
import { ChangedPath } from 'ag-grid-community';

@Injectable()
export class FirestoreTaskService extends TaskApi {
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

  public get(id: string): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  public create(creationDTO: TaskCreationDTO): Observable<string> {
    //TODO: get uder ID from auth context
    const userID = '5sALe2N1MC33P7ldmDnv';
    const firebaseTask = createFirebaseTaskFromCreationDTO(creationDTO, userID);
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );
    return from(taskCollection.add(firebaseTask)).pipe(map(res => res.id));
  }

  public accept(id: string): Observable<any> {
    // TODO: get acceptor ID from auth context
    const userID = '5sALe2N1MC33P7ldmDnv';
    const taskCollection = this.database.collection<FirebaseTask>(
      FirestoreCollectionsNames.TASK
    );

    return this.userAPiService.get(userID).pipe(
      switchMap(appUser => {
        return from(
          taskCollection.doc(id).update({
            state: TaskState.ACCEPTED,
            executorPhoneNumber: appUser.phoneNumber,
            executorID: userID,
          })
        );
      })
    );
  }

  public cancel(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public delete(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public resign(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public finishDone(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public finishFail(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
