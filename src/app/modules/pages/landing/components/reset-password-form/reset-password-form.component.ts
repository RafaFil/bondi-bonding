import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PasswordResetService } from 'src/app/modules/core/services/password-reset.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.sass']
})
export class ResetPasswordFormComponent implements OnInit {

  passwordRecoveryForm = this.formBuilder.group({
    username: [ '',
      [ Validators.minLength(4), Validators.required ]
    ],
    recoveryCode: [ { value: '', disabled: true },
      [ Validators.minLength(6), Validators.maxLength(6) ]
    ]
  });

  get usernameControl(): FormControl {
    return this.passwordRecoveryForm.controls.username;
  }

  get recoveryCodeControl(): FormControl {
    return this.passwordRecoveryForm.controls.recoveryCode;
  }

  get disabledIconClass(): string {
    return this.recoveryCodeControl.disabled ? 'bb-disabled' : '';
  }

  constructor(private passwordResetService: PasswordResetService,
              private formBuilder: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  resetFormOnUserChange() {
    if (!this.recoveryCodeControl.disabled) {
      this.recoveryCodeControl.setValue('');
      this.recoveryCodeControl.disable();
      this.recoveryCodeControl.removeValidators(Validators.required);
    }
  }

  handlePasswordRecovery() {
    this.recoveryCodeControl.updateValueAndValidity();
    if (!this.passwordRecoveryForm.valid) {
      return;
    }

    if (this.recoveryCodeControl.disabled) {
      this.sendRecoveryCode();
    } else {
      this.verifyRecoveryCode();
    }
  }

  sendRecoveryCode() {
    const username = this.usernameControl.value;
    this.passwordResetService.sendPasswordRecoveryCode(username)
    .subscribe(result => {
      if (result.success) {
        this.recoveryCodeControl.enable();
        this.recoveryCodeControl.addValidators(Validators.required);
        return;
      }

      this.snackBar.open('There has been an error while trying to send a recovery code. Please try again later.', '', {
        duration: 3000
      });
    });

  }

  verifyRecoveryCode() {
    const recoveryCode = this.recoveryCodeControl.value;
    this.passwordResetService.verifyPasswordRecoveryCode(recoveryCode!)
    .subscribe(result => {
      if (result.success) {
        this.router.navigate(['/updatePassword']);
        return;
      }
      this.snackBar.open('There has been an error while verifying your recovery code. Please try again later.', '', {
        duration: 3000
      });
    });
  }
}
