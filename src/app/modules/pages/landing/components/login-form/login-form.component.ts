import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthRequest } from 'src/app/modules/core/interfaces';
import { AuthService } from 'src/app/modules/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {

  isLoading: boolean = false;
  isFailedAuth: boolean = false;
  loginForm = this.formBuilder.group({
    username: new FormControl('', [ Validators.minLength(4), Validators.required ]),
    password: new FormControl('', [ Validators.minLength(8), Validators.required ])
  });

  get usernameControl(): FormControl {
    return this.loginForm.controls.username;
  }

  get passwordControl(): FormControl {
    return this.loginForm.controls.password;
  }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  handleLoginSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.isLoading = true;

    this.authService.doUserAuth(this.loginForm.getRawValue() as AuthRequest)
    .subscribe(response => {
      if (response.success) {
        this.isFailedAuth = false;
        this.router.navigate(['/home'])
        .then(() => this.isLoading = false);
        return;
      }

      this.isFailedAuth = true;
      this.isLoading = false;
    });
  }

  resetFailedAuth() {
    this.isFailedAuth = false;
  }
}
