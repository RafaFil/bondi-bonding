import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TripFiltersFormComponent } from '../../general/trip-filters-form/trip-filters-form.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  editionModeOn: boolean = false;
  user!: User;

  @ViewChild("#UserFilters") filtersForm !: TripFiltersFormComponent;


  constructor(private userService: ProfileService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  enterEditionMode(){
    this.editionModeOn = true;
  }

  getUser() {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.userService.getProfile(username)
      .subscribe(user => this.user = user);
    } else {
      this.userService.getProfile(this.authService.runningUser!.username!)
      .subscribe(user => this.user = user);
    }
  }

  saveFilters(){
    const filters = this.filtersForm.filterForm.controls;
    this.userService.updateProfileFilters(); //Parameter
  }

  onChange(eventData: { edit : boolean }){
    this.editionModeOn = eventData.edit;
  }
}
