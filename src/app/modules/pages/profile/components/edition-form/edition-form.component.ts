import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.sass']
})
export class EditionFormComponent implements OnInit {

  editForm?: FormGroup;

  @Input() user!: User;

  @Output() editEnd = new EventEmitter<{
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string
  }>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group(
      {
        username: [this.user.username, [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
        phone: [this.user.phone, [Validators.required, Validators.pattern('[0-9]+')]],
        email: [this.user.email, [Validators.required, Validators.email]],
        description: [this.user.description, [Validators.required, Validators.maxLength(256)]]
      }
    );
  }

  submitEdit() {
    const value = { ...this.editForm?.value, isEdit: true };
    this.editEnd.emit(value);
  }

  cancelEdit() {
    this.editEnd.emit({ isEdit: false });
  }

}
