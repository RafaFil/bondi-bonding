import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  @Input() user!: User;
  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
