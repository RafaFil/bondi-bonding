import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  editionModeOn = false;

  user: User ={
    uid: "1",
    name: "John Titor",
    username: "@JoyBoy64",
    iconUrl: "https://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg",
  
    description: "A very sociable guy who enjoy anime and otaku stuff like anime, manga, jpop, and japan, i love japan",
    birthdate: "10/10/00",
    gender:"cat",
    phone:"1122",
    email: "myemail@email.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

  enterEditionMode(){
    this.editionModeOn = true;
    alert("aaaaaa")
  }

}
