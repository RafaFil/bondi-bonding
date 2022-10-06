import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  username?: string;

  constructor() { }

  sendPasswordRecoveryCode(username: string): boolean {
    this.username = username;
    return true;
  }

  verifyPasswordRecoveryCode(recoveryCode: string): boolean {
    return true;
  }

  updatePassword(newPassword: string, username?: string): boolean {
    return true;
  }
}
