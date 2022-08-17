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
  }

  sendMessage(context: string): void {
    const message: MessageModel = {
      context,
      date: new Date(),
      title: this.host,
    };
    this.webSocketService.send(message);
  }

  onNameProvided(name: string): void {
    this.host = name;
    this.nameRequired = false;
    this.webSocketService.listen(message => {
      this.messageModels.push(message);
    });
  }


}
