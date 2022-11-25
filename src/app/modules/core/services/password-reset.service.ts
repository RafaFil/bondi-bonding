import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const RESET_PASSWORD_ENDPOINT = `${environment.baseUrl}/resetPassword`;

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  username?: string;

  constructor(private http: HttpClient) { }

  sendPasswordRecoveryCode(username: string): Observable<{ success: boolean }> {
    this.username = username;
    return this.http.post<{ success: boolean }>(`${RESET_PASSWORD_ENDPOINT}/start`, { username })
    .pipe(
      catchError( err => of(err))
    );
  }

  verifyPasswordRecoveryCode(recoveryCode: string): Observable<{
    success: boolean,
    data?: { token: string }
  }> {
    return this.http.post<{
      success: boolean,
      data?: { token: string }
    }>(`${RESET_PASSWORD_ENDPOINT}/verify`, { username: this.username, recoveryCode })
    .pipe(
      tap( response => {
        if (response.success) {
          localStorage.setItem('token', response.data?.token!);
        }
      }),
      catchError( err => of(err))
    );
  }

  updatePassword(newPassword: string): Observable<{
    success: boolean
  }> {
    return this.http.patch<{ success: boolean }>(`${RESET_PASSWORD_ENDPOINT}/update`, {
      username: this.username,
      password: newPassword
    })
    .pipe(
      catchError( err => of(err))
    );
  }
}
