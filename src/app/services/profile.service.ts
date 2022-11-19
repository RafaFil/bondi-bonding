import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TripFilters } from '../interfaces';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: User ={
    uid: "1",
    name: "John Titor",
    username: "juancarlos",
    iconUrl: "https://pbs.twimg.com/profile_images/1302962150302982146/NTb6iGpC_400x400.jpg",

    description: "A very sociable guy who enjoy anime and otaku stuff like anime, manga, jpop, and japan, i love japan",
    birthdate: "10/10/00",
    gender: "Male",
    phone:"1122",
    email: "myemail@email.com",
    filters: {
      ageRange :{
        min : 22,
        max : 69
      },
      gender: "Male",
      likes: ["TV","Games","Music"]
    }
  };

  constructor() { }

  getProfile(username : string) : Observable<User> {
    return of(this.user);
  }

  updatePublicProfile( data: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string
  }): Observable<{
    success: boolean
  }> {
    return of({ success: true });
  }

  updateProfileFilters(filters: TripFilters): Observable<{
    success: boolean
  }> { //Ver objeto
    return of({ success: true });
  }

  updateProfilePicture() {

  }

}
