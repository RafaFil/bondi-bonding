import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Chat } from 'src/app/interfaces';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-feed-input',
  templateUrl: './chat-feed-input.component.html',
  styleUrls: ['./chat-feed-input.component.sass']
})
export class ChatFeedInputComponent implements OnInit {

  @Input() chat!: Chat;

  constructor(private chatService: ChatService,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  sendMessage(messageInput: HTMLInputElement){
    this.chatService.sendMessage({
      fromId: this.chat.fromId!,
      toId: this.chat.toId!,
      content: {
        type: 'text',
        value: messageInput.value
      },
      sentDate: new Date()
    })
    .subscribe(result => {
      if (result.sent) {
        messageInput.value = '';
      } else {
        this.snackBar.open(`An error occured while trying to send your last message, please try again.`,
          undefined,
          {
            duration: 4000
          }
        );
      }
    });
  }

}
