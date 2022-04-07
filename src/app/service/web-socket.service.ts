import {Injectable} from '@angular/core';
import {CompatClient, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {MessageModel} from '../model/message.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  constructor(private http: HttpClient) {
  }

  public connect(): CompatClient {
    const socket: SockJS = new SockJS(`http://localhost:8080/socket`);
    return Stomp.over(socket);
  }

  public sendMessage(message: MessageModel): Observable<void> {
    return this.http.post<void>('http://localhost:8080/notify', message);
  }

}
