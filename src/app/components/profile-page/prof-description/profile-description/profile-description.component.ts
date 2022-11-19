import { ProfileService } from 'src/app/services/profile.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.sass']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input() user!: User;
  @Input() isEdit : boolean = true;

  @Output() closeEditMode = new EventEmitter<{ edit: boolean }>();

  constructor(private profileService: ProfileService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleEditEnd($event: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string
  }) {
    if (this.isEdit) {
      this.profileService.updatePublicProfile($event)
      .subscribe(result => {
        if (result.success) {
          this.closeEditMode.emit({edit : false});
        } else {
          this.snackBar.open('There was an error while updating your public profile.');
        }
      });
    }
  }

}
