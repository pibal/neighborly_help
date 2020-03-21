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

@Injectable()
export class FirestoreTaskService extends TaskApi {
  constructor(private database: AngularFirestore) {
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
    throw new Error('Method not implemented.');
  }

  public accept(id: string): Observable<any> {
    throw new Error('Method not implemented.');
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
