import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-from',
  templateUrl: './validation-from.component.html',
  styleUrls: ['./validation-from.component.sass']
})
export class ValidationFromComponent implements OnInit {

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
