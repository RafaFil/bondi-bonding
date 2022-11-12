import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  getUser(username : string, auth : string) : User {
    return this.user;
  }

  updateUserFilters(formsControl? : string){ //Ver objeto 
    //something
  }

}
