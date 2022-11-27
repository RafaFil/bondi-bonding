import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/modules/core/interfaces';
import { Chat } from 'src/app/modules/core/interfaces/Chat';
import { ChatMessage } from 'src/app/modules/core/interfaces/ChatMessage';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat!: Chat;

  get lastMessage(): ChatMessage | undefined {
    if (this.chat.messages && this.chat.messages?.length > 0) {
      return this.chat.messages[this.chat.messages.length - 1];
    }
    return undefined;
  }

  get to(): User | undefined {
    for (const user of this.chat.members) {
      if (user.username !== this.authService.runningUser?.username) {
        return user;
      }
    }

    return undefined;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
