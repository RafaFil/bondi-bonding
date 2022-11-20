import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripFilters } from '../interfaces';
import { User } from '../interfaces/User';

const PROFILE_PICTURE_ENDPOINT = `${environment.baseUrl}/profilePicture`;

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

  constructor(private http: HttpClient) { }

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

  uploadProfilePicture(file: File): Observable<{
    success: boolean,
    data?: string,
    message?: string
  }> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.http.get<any>(PROFILE_PICTURE_ENDPOINT);
    console.log(PROFILE_PICTURE_ENDPOINT);
    return this.http.post<{
      success: boolean,
      data?: string,
      message?: string
    }>(PROFILE_PICTURE_ENDPOINT, formData);
  }

}
