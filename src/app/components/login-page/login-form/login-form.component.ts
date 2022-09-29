import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.minLength(3)],
    password: ['', Validators.minLength(3)]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  handleLoginSubmit($event: SubmitEvent) {
    console.log(this.loginForm.controls.username);
    $event.preventDefault();
  }

}
