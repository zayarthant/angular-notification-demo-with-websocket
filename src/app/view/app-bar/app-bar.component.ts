import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  @Input()
  username: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
