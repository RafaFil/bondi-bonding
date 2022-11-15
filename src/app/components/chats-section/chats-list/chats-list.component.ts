import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.sass']
})
export class ChatsListComponent implements OnInit {

  @Input() chats : Chat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
