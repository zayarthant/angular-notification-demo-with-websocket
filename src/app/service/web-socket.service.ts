import {Injectable, OnDestroy} from '@angular/core';
import {CompatClient, Stomp} from '@stomp/stompjs';
import {MessageModel} from '../model/message.model';
import {StompSubscription} from '@stomp/stompjs/src/stomp-subscription';

export type listenerCallBack = (message: MessageModel) => void;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy {

  private connection: CompatClient = undefined;

  private subscription: StompSubscription;

  constructor() {
    this.connection = Stomp.client('ws://localhost:8080/protocol');
    this.connection.connect({}, () => console.log('something have done'));
  }

  public send(message: MessageModel): void {
    if (this.connection.connected) {
      this.connection.send('/ws/message', {}, JSON.stringify(message));
    }
  }

  public listen(fun: listenerCallBack): void {
    if (this.connection.connected) {
      this.subscription = this.connection.subscribe('/messenger/notification', message => fun(JSON.parse(message.body)));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
