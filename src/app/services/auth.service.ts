import { Injectable } from '@angular/core';
import { AuthRequest } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  doUserAuth(authRequest: AuthRequest): string {
    return 'auth:token';
  }
}
