import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { AuthRequest } from 'src/app/interfaces/AuthRequest';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {

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

    if (this.authService.doUserAuth(this.loginForm.getRawValue() as AuthRequest)) {
      this.router.navigate(['/home']);
    }
  }

}
