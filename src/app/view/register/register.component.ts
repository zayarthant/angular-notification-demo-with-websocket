import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: FormControl = new FormControl(null, Validators.required);

  @Output()
  getName: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.name.invalid || this.name.value.trim().empty) {
      return;
    }
    this.getName.next(this.name.value);
  }

}
