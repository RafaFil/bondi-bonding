import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.sass']
})
export class DataViewComponent implements OnInit {

  @Input() user!: User;

  get genderIcon(): string {
    //"Male" | "Female" | "Non-binary" | "Other"
    switch(this.user.gender) {
      case 'Male':
        return 'male';
      break;
      case 'Female':
        return 'female';
      break;
    }
    return '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
