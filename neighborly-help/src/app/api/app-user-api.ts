import { AppUser } from '../model/app-user';
import { Observable } from 'rxjs';

export abstract class AppUserApi {
  abstract get(uid: string): Observable<AppUser>;
  abstract create(user: AppUser): Observable<string>;
  abstract update(uid: string): Observable<string>;
}
