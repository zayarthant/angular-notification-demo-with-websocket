import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from '../../model/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  host = false;

  @Input()
  message: MessageModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
