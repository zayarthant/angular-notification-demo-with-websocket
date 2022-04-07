import {Component} from '@angular/core';
import {WebSocketService} from './service/web-socket.service';
import {MessageModel} from './model/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  messageModels: MessageModel[] = [];

  host = 'Default';

  nameRequired = true;

  constructor(private webSocketService: WebSocketService) {
    // Open connection with server socket
    const stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification', notifications => {
        // Update notifications attribute with the recent messsage sent from the server
        this.messageModels.push(JSON.parse(notifications.body));
        window.scrollTo(0, document.body.scrollHeight + 300);
      });
    });
  }

  sendMessage(context: string): void {
    const message: MessageModel = {
      context,
      date: new Date(),
      title: this.host,
    };
    this.webSocketService.sendMessage(message).subscribe();
  }

  onNameProvided(name: string): void {
    this.host = name;
    this.nameRequired = false;
  }

}
