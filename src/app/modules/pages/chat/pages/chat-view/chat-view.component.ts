import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/modules/core/interfaces/Chat';
import { ChatService } from 'src/app/modules/core/services/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.sass']
})
export class ChatViewComponent implements OnInit, AfterViewChecked {

  chat?: Chat;
  isScrollToBottom: boolean = true;
  isError: boolean = false;

  @ViewChild('chatSection')
  chatSection?: ElementRef;

  constructor(private chatService: ChatService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getChat();
  }

  getChat() {
    const chatId = `${this.route.snapshot.paramMap.get('chatId')}`;
    this.chatService.getChatbyId(chatId)
    .subscribe(result => {
      this.isError = !result.success;

      if (result.success) {
        this.chat = result.data;
        this.isScrollToBottom = true;
      }
    });
  }

  ngAfterViewChecked() {
    if (this.isScrollToBottom && this.chatSection) {
      this.scrollToBottomOfChat();
      this.isScrollToBottom = false;
    }
  }

  scrollToBottomOfChat(): void {
    const chatSectionElement = this.chatSection?.nativeElement;
    chatSectionElement.scroll({ top: chatSectionElement.scrollHeight });
  }

}
