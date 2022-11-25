import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TripFilters } from '../interfaces';
import { User } from '../interfaces/User';
import { AuthService } from './auth.service';

const PROFILE_PICTURE_ENDPOINT = `${environment.baseUrl}/profilePicture`;
const PROFILE_ENDPOINT = `${environment.baseUrl}/profile`;
const FILTERS_ENDPOINT = `${environment.baseUrl}/filters`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  get runningUser(): User {
    return this.authService.runningUser!;
  }

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getProfile(username : string) : Observable<{
    success: boolean,
    data?: User,
    message?: string
  }> {
    return this.http.get<{
      success: boolean,
      data?: User,
      message?: string
    }>(`${PROFILE_ENDPOINT}/${username}`)
    .pipe(
      catchError( err => of(err))
    );
  }

  updatePublicProfile( data: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string,
    iconKey?: string
  }): Observable<{
    success: boolean
  }> {
    return this.http.patch<{
      success: boolean,
      data?: User,
      message?: string
    }>(`${PROFILE_ENDPOINT}/${data.username}`, data)
    .pipe(
      catchError( err => of(err))
    );
  }

  updateProfileFilters(filters: TripFilters): Observable<{
    success: boolean
  }> {
    return this.http.put<{
      success: boolean
    }>(`${FILTERS_ENDPOINT}/${this.runningUser.username}`, { filters })
    .pipe(
      catchError( err => of(err))
    );
  }

  uploadProfilePicture(file: File): Observable<{
    success: boolean,
    data?: string,
    message?: string
  }> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<{
      success: boolean,
      data?: string,
      message?: string
    }>(PROFILE_PICTURE_ENDPOINT, formData)
    .pipe(
      catchError( err => of(err))
    );
  }

}
