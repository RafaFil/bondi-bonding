import { PasswordResetService } from './../../../services/password-reset.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.sass']
})
export class ResetPasswordFormComponent implements OnInit {
  usernameControl = new FormControl(
    '', Validators.minLength(4) );
  recoveryCodeControl = new FormControl(
    {value: '', disabled: true, },
    [ Validators.minLength(6), Validators.maxLength(6) ]);

  constructor(private passwordResetService: PasswordResetService,
              private router: Router) { }

  ngOnInit(): void {
  }

  resetFormOnUserChange() {
    if (!this.recoveryCodeControl.disabled) {
      this.recoveryCodeControl.setValue('');
      this.recoveryCodeControl.disable();
    }
  }

  handlePasswordRecovery($event: SubmitEvent) {
    $event.preventDefault();

    if (this.recoveryCodeControl.disabled) {
      this.sendRecoveryCode();
    } else {
      this.verifyRecoveryCode();
    }
  }

  sendRecoveryCode() {
    const username = this.usernameControl.value;
    if (this.passwordResetService.sendPasswordRecoveryCode(username!)) {
      this.recoveryCodeControl.enable();
    }
  }

  verifyRecoveryCode() {
    if (!this.recoveryCodeControl.valid) return;

    const recoveryCode = this.recoveryCodeControl.value;
    if (this.passwordResetService.verifyPasswordRecoveryCode(recoveryCode!)) {
      this.router.navigate(['/init/updatePassword']);
    }
  }
}
