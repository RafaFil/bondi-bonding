import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { AuthRequest } from 'src/app/interfaces/AuthRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {
  @Output() authRequestEvent = new EventEmitter<AuthRequest>();

  loginForm = this.formBuilder.group({
    username: new FormControl('', [ Validators.minLength(4) ]),
    password: new FormControl('', [ Validators.minLength(8) ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  handleLoginSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.authRequestEvent.emit(this.loginForm.getRawValue() as AuthRequest);
  }

}
