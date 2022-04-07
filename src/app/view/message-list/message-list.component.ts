import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from '../../model/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  messages: MessageModel[];
  @Input()
  host: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  isHost(message: MessageModel): boolean {
    return message.title === this.host;
  }

}
