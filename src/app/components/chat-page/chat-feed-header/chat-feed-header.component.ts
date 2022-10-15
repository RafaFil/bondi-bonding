import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-feed-header',
  templateUrl: './chat-feed-header.component.html',
  styleUrls: ['./chat-feed-header.component.sass']
})
export class ChatFeedHeaderComponent implements OnInit {

  @Input() title !: string;
  @Input() showIcons : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
