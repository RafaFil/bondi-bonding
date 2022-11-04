import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.sass']
})
export class DataViewComponent implements OnInit {

  @Input() user: User ={
    uid: "1",
    name: "Joan Lidemberg",
    username: "@AaaAA",
    iconUrl: "anUrl",
  
    description: "A very sociable guy who enjoy anime and otaku stuff like anime, manga, jpop, and japan, i love japan",
    birthdate: "10/10/00",
    gender:"cat",
    phone:"1122",
    email: "myemail@email.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
