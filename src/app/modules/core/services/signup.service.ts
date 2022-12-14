import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces';

const SIGNUP_ENDPOINT = `${environment.baseUrl}/user`;

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  createUser(user : User) : Observable<
  {
    success: boolean,
    data?:string
    message?: string,
    error?: { message: string }
  }> {
    return this.http.post<{
      success: boolean,
      data? : string
      message?: string
    }>(SIGNUP_ENDPOINT,user)
    .pipe(
      catchError( err => of(err))
    )
  }

}
