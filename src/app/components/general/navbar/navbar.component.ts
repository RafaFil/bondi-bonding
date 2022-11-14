import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() activePage: 'Home' | 'Chat' | 'Profile' = 'Home';

  isBadgeHidden!: boolean;
  unreadedChats!: number;

  get homeActiveSelector(): string {
    return this.activePage === 'Home' ? 'bb-active' : '';
  }

  get homeChatSelector(): string {
    return this.activePage === 'Chat' ? 'bb-active' : '';
  }

  get homeProfileSelector(): string {
    return this.activePage === 'Profile' ? 'bb-active' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
