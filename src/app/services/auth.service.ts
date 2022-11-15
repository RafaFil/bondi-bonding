import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthRequest, User } from 'src/app/interfaces';
import { MOCKED_USER } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  runningUser?: User = MOCKED_USER;

  constructor(private router: Router) { }

  doUserAuth(authRequest: AuthRequest): Observable<boolean | undefined> {
    return of(true);
  }
}
