import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.sass']
})
export class EditionFormComponent implements OnInit {

  @Input() user!: User;
  hide = true;
  repeatPassword = false;

  editForm = this.formBuilder.group(
    {
      username : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
      phone : ['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]],
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
