import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userAuth(authRequest: AuthRequest): string {
    return 'auth:token';
  }
}
