import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-forms',
  templateUrl: './signup-forms.component.html',
  styleUrls: ['./signup-forms.component.sass']
})
export class SignupFormsComponent implements OnInit {

  hidePassword = true;

  signUpForm = this.formBuilder.group(
    {
      name : ['',[Validators.required,Validators.minLength(3)]],
      username : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      birthdate : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
      gender : ['',[Validators.required]],
      phone : ['',[Validators.required]], // how to validate it :)
      email : ['',[Validators.required,Validators.email]],
    }
  );

  get passwordIconName(): string {
    return this.hidePassword ? 'visibility_off' : 'visibility';
  }

  get passwordIconColor(): string {
    return this.hidePassword ? '' : 'primary';
  }

  get passwordInputType(): string {
    return this.hidePassword ? 'password' : 'text';
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}
