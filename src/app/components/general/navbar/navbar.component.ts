import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isBadgeHidden !: boolean;
  unreadedChats !: number;

  constructor() { }

  ngOnInit(): void {
  }

}
