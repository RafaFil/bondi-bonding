import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { AuthRequest, AuthResponse, User } from 'src/app/modules/core/interfaces';
import { environment } from 'src/environments/environment';

const AUTH_ENDPOINT = `${environment.baseUrl}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  runningUser?: User;

  constructor(private http: HttpClient) { }

  doUserAuth(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(AUTH_ENDPOINT, authRequest)
    .pipe(
      tap( response => {
        if (response.success) {
          this.runningUser = response.data?.user;
          localStorage.setItem('token', response.data?.token!);
        }
      }),
      catchError( err => of(err))
    );
  }

  validateToken(): Observable<any> {
    const url = `${ AUTH_ENDPOINT }/renew`;

    return this.http.get<AuthResponse>( url )
      .pipe(
        tap( response => {
          if (response.success) {
            this.runningUser = response.data?.user;
            localStorage.setItem('token', response.data?.token!);
          }

          return response.success;
        }),
        catchError( err => of(false) )
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
