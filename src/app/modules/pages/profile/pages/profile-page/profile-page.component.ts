import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';

import { TripFilters } from 'src/app/modules/core/interfaces';
import { User } from 'src/app/modules/core/interfaces/User';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { ProfileService } from 'src/app/modules/core/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  profilePicture?: File;
  isEditMode: boolean = false;
  isOwnProfile: boolean = false;
  isUpdatingFilters: boolean = false;
  isLoading: boolean = false;
  user!: User;

  get showMenuAndFilters(): boolean {
    if (!this.isOwnProfile) {
      return false;
    } else {
      return !this.isEditMode;
    }
  }

  constructor(private profileService: ProfileService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  enterEditionMode() {
    if (this.isOwnProfile) {
      this.isEditMode = true;
    }
  }

  getUser() {
    this.isLoading = true;
    let username = this.route.snapshot.paramMap.get('username');

    if (!username) {
      username = this.authService.runningUser!.username!;
    }

    this.profileService.getProfile(username)
    .subscribe(result => {
      this.isLoading = false;

      if (result.success) {
        this.user = result.data!;

        if (this.user.birthdate) {
          this.user.birthdate = new Date(this.user.birthdate).toLocaleDateString();
        }

        this.isOwnProfile = this.user.username === this.authService.runningUser!.username;
        return;
      }

      this.snackBar.open(`An error ocurred while retrieving the profile for ${username}.`
      , '', { duration: 3000 });

      this.router.navigate(['/profile']);
    });
  }

  saveFilters($event: TripFilters) {
    this.isUpdatingFilters = true;

    this.profileService.updateProfileFilters($event)
    .subscribe(result => {
      let msg;

      if (result.success) {
        msg = 'Your trip filters have been updated successfully.';
        this.user.filters = $event;
      } else {
        msg = 'There was an error while updating your trip filters, please try again later.';
      }

      this.snackBar.open(msg, '', {
        duration: 3000
      });
      this.isUpdatingFilters = false;
    });
  }

  closeEditMode(eventData: { edit : boolean }) {
    if (this.isOwnProfile) {
      this.isEditMode = eventData.edit;
      this.getUser();
    }
  }

  handleProfilePictureChange($event: Event) {
    const { files } = $event.target as HTMLInputElement;
    if (!files || files.length === 0) {
      this.profilePicture = undefined;
      return;
    }

    this.profilePicture = files[0];
  }
}
