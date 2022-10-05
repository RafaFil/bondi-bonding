import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PasswordResetService } from 'src/app/services/password-reset.service';
import { PasswordUpdatedDialogComponent } from './password-updated-dialog/password-updated-dialog.component';

@Component({
  selector: 'app-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.sass']
})
export class UpdatePasswordFormComponent implements OnInit {
  updatePasswordForm = this.formBuilder.group({
    newPassword: [ '', [ Validators.required, Validators.minLength(8) ] ]
  });

  get newPasswordControl(): FormControl {
    return this.updatePasswordForm.controls.newPassword;
  }

  constructor(private formBuilder: FormBuilder,
              private passwordResetService: PasswordResetService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }

  handlePasswordUpdate() {
    if (!this.updatePasswordForm.valid) {
      return;
    }

    const newPassword = this.newPasswordControl.value;
    const isPasswordUpdated = this.passwordResetService.updatePassword(newPassword);

    this.dialog.open(
      PasswordUpdatedDialogComponent,
      { data: isPasswordUpdated }
    )
    .afterClosed().subscribe(result => {
      this.router.navigate(['/init/login']);
    });
  }
}
