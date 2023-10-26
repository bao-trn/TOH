import { Component } from '@angular/core';
import {MessageService} from "../../app/services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  constructor(protected messageService: MessageService) {
  }


}
