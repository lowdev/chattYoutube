import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchSharedService {
  data$: Subject<any> = new Subject<any>();

  emitChange(change: string) {
    this.data$.next(change);
  }

  getMessage(): Observable<any> {
    return this.data$.asObservable();
  }
}
