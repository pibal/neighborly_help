import { Task } from '../model/task/task';
import { Observable } from 'rxjs';
import { TaskCreationDTO } from '../model/task/task-creation-dto';

export abstract class TaskApi {
  abstract getAll(): Observable<Task[]>;
  abstract get(id: string): Observable<Task>;
  abstract create(creationDTO: TaskCreationDTO): Observable<string>;
  abstract accept(id: string): Observable<any>;
  abstract cancel(id: string): Observable<any>;
  abstract delete(id: string): Observable<any>;
  abstract resign(id: string): Observable<any>;
  abstract finishDone(id: string): Observable<any>;
  abstract finishFail(id: string): Observable<any>;
}
