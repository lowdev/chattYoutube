import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class EventVideoService {
  private socket;

  constructor() {
    this.socket = io();
  }

  sendMessage(type, message) {
    this.socket.emit(type, message);
  }

  getMessages() {
    //this.socket = io();
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }
}
