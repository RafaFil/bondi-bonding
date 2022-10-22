import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.sass']
})
export class UserIconComponent implements OnInit {
  @Input() iconUrl?: string;

  constructor() { }

  ngOnInit() {
  }

}
