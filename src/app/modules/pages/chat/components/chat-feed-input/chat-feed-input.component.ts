import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Chat } from 'src/app/modules/core/interfaces';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { ChatService } from 'src/app/modules/core/services/chat.service';

@Component({
  selector: 'app-chat-feed-input',
  templateUrl: './chat-feed-input.component.html',
  styleUrls: ['./chat-feed-input.component.sass']
})
export class ChatFeedInputComponent implements OnInit {

  @Input() chat!: Chat;

  @Output() messageSent = new EventEmitter();

  constructor(private chatService: ChatService,
              private snackBar: MatSnackBar,
              private authService: AuthService) {}

  ngOnInit(): void {
  }

  sendMessage(messageInput: HTMLInputElement){
    this.chatService.sendMessage(messageInput.value, this.chat._id)
    .subscribe(result => {
      if (result.success) {
        messageInput.value = '';
        this.messageSent.emit();

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
