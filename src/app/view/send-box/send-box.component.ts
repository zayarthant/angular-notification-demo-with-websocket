import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-send-box',
  templateUrl: './send-box.component.html',
  styleUrls: ['./send-box.component.css']
})
export class SendBoxComponent implements OnInit {

  inputBox: FormControl = new FormControl(null, Validators.required);

  @Output()
  send: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.inputBox.invalid || this.inputBox.value.trim().empty) {
      return;
    }
    this.send.next(this.inputBox.value);
    this.inputBox.reset();
  }

}
