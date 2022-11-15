import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile.service';
import { TripFiltersFormComponent } from '../../general/trip-filters-form/trip-filters-form.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  @ViewChild("#UserFilters") filtersForm !: TripFiltersFormComponent;
  

  editionModeOn = false;

  user! : User;

  constructor(private userService : ProfileService) { }

  ngOnInit(): void {
    this.getUser("a","a");
  }

  enterEditionMode(){
    this.editionModeOn = true;
  }

  getUser(username:string,auth:string) {
    this.userService.getProfile("a","a").subscribe(user => this.user = user);
  }

  saveFilters(){
    const filters = this.filtersForm.filterForm.controls;
    this.userService.updateProfileFilters(); //Parameter
  }

  onChange(eventData: { edit : boolean }){
    this.editionModeOn = eventData.edit;
  }
}
