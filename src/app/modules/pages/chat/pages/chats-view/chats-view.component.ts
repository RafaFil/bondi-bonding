import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chat } from 'src/app/modules/core/interfaces/Chat';
import { ChatsInfo } from 'src/app/modules/core/interfaces/ChatsInfo';
import { ChatService } from 'src/app/modules/core/services/chat.service';

@Component({
  selector: 'app-chats-view',
  templateUrl: './chats-view.component.html',
  styleUrls: ['./chats-view.component.sass']
})
export class ChatsViewComponent implements OnInit {

  chatsInfo: ChatsInfo = { temporalChats : [], permanentChats: [] };
  isLoading: boolean = false;

  get temporalChats(): Chat[] {
    return this.chatsInfo.temporalChats;
  }

  get permanentChats(): Chat[] {
    return this.chatsInfo.permanentChats;
  }

  get hasNoChats(): boolean {
    return this.temporalChats.length === 0 && this.permanentChats.length === 0;
  }

  constructor(private chatService: ChatService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getChatPreviews();
  }

  getChatPreviews() {
    this.isLoading = true;

    this.chatService.getChatPreviews()
    .subscribe(result => {
      this.isLoading = false;

      if (result.success) {
        this.chatsInfo.permanentChats = result.data!;
        return;
      }

      this.snackBar.open('There has been an error while retrieving chats. Please reload the page or try again later.',
        '',
        { duration: 3000 }
      );
    });
  }

}
