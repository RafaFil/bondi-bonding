import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/modules/core/interfaces/ChatMessage';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.sass']
})
export class SpeechBubbleComponent implements OnInit {

  @Input() message!: ChatMessage;

  get isOutgoing(): boolean {
    return this.message.fromId === this.authService.runningUser!.uid;
  }

  get speechBubbleType(): 'outgoing' | 'incoming' {
    return this.isOutgoing ? 'outgoing' : 'incoming';
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
