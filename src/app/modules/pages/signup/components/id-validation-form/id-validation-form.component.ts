import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-validation-form',
  templateUrl: './id-validation-form.component.html',
  styleUrls: ['./id-validation-form.component.sass']
})
export class IdValidationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handlePhotoInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      // TODO: Handle file upload
    }
  }
}
