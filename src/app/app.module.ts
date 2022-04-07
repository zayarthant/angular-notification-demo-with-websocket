import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppBarComponent } from './view/app-bar/app-bar.component';
import { SendBoxComponent } from './view/send-box/send-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MessageListComponent } from './view/message-list/message-list.component';
import { MessageComponent } from './view/message/message.component';
import { RegisterComponent } from './view/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SendBoxComponent,
    MessageListComponent,
    MessageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
