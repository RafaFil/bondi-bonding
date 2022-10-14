import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/interfaces/ChatMessage';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.sass']
})
export class SpeechBubbleComponent implements OnInit {

  @Input() message !: ChatMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
